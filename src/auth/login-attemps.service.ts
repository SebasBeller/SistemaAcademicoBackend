import { Injectable, UnauthorizedException } from '@nestjs/common';

interface LoginAttempt {
  attempts: number;
  lockedOutUntil: Date | null;
  lockDuration:number;
}

@Injectable()
export class LoginAttemptsService {
  private readonly attemptsMap = new Map<string, LoginAttempt>();

  private readonly MAX_ATTEMPTS = 2;
  private readonly LOCKOUT_DURATION = 15 * 60 * 1000; 

  checkLockout(email: string): void {

    const loginData = this.attemptsMap.get(email) || { attempts: 0, lockedOutUntil: null,lockDuration:this.LOCKOUT_DURATION };

    if (loginData.lockedOutUntil && loginData.lockedOutUntil > new Date()) {
      const minutesLeft = Math.ceil((loginData.lockedOutUntil.getTime() - new Date().getTime()) / (60 * 1000));
      throw new UnauthorizedException(`Has superado el número máximo de intentos. Espera ${minutesLeft} minutos antes de volver a intentar.`);
    } else if (loginData.lockedOutUntil && loginData.lockedOutUntil <= new Date()) {
      loginData.attempts = 0;
      loginData.lockedOutUntil = null;
      loginData.lockDuration+=loginData.lockDuration;
      this.attemptsMap.set(email, loginData);
    }
  }

  registerFailedAttempt(email: string): void {
    const loginData = this.attemptsMap.get(email) || { attempts: 0, lockedOutUntil: null ,lockDuration:this.LOCKOUT_DURATION};
    loginData.attempts += 1;

    if (loginData.attempts > this.MAX_ATTEMPTS) {
      loginData.lockedOutUntil = new Date(Date.now() + loginData.lockDuration);
      this.attemptsMap.set(email, loginData);
      throw new UnauthorizedException(`Has superado el número máximo de intentos. Espera ${loginData.lockDuration/(60*1000)} minutos antes de volver a intentar.`);
    }

    this.attemptsMap.set(email, loginData);
  }

  resetAttempts(email: string): void {
    this.attemptsMap.delete(email);
  }
}
