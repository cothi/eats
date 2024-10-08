export enum ErrorCode {
  // 인증 관련 에러
  TOKEN_EXPIRED = 'TOKEN_EXPIRED',
  INVALID_TOKEN = 'INVALID_TOKEN',
  TOKEN_NOT_PROVIDED = 'TOKEN_NOT_PROVIDED',
  UNAUTHORIZED = 'UNAUTHORIZED',
  SIGN_EMAIL_CONFLICTED = 'SIGN_EMAIL_CONFLICTED',

  // 결제 관련 에러
  PAYMENT_FAILED = 'PAYMENT_FAILED',
  INSUFFICIENT_FUNDS = 'INSUFFICIENT_FUNDS',
  PAYMENT_ALREADY_PROCESSED = 'PAYMENT_ALREADY_PROCESSED',
  PAYMENT_EXPIRED = 'PAYMENT_EXPIRED',

  // 예약 관련 에러
  BOOKING_NOT_FOUND = 'BOOKING_NOT_FOUND',
  BOOKING_ALREADY_EXISTS = 'BOOKING_ALREADY_EXISTS',
  BOOKING_CANCELED = 'BOOKING_CANCELED',
  BOOKING_NOT_ALLOWED = 'BOOKING_NOT_ALLOWED',

  // 좌석 관련 에러
  SEAT_NOT_AVAILABLE = 'SEAT_NOT_AVAILABLE',
  SEAT_ALREADY_BOOKED = 'SEAT_ALREADY_BOOKED',
  SEAT_NOT_FOUND = 'SEAT_NOT_FOUND',
  SEAT_ALREADY_CREATED = 'SEAT_ALREADY_CREATED',

  // 콘서트 관련 에러
  CONCERT_NOT_FOUND = 'CONCERT_NOT_FOUND',
  CONCERT_FULL = 'CONCERT_FULL',
  CONCERT_CANCELED = 'CONCERT_CANCELED',
  CONCERT_SAME_EXIST = 'CONCERT_SAME_EXIST',

  // 콘서트 날짜 관련 에러
  CONCERT_DATE_SAME_EXIST = 'CONCERT_DATE_SAME_EXIST',
  CONCERT_DATE_NOT_FOUNT = 'CONCERT_DATE_NOT_FOUND ',

  // 유저 관련 에러
  USER_NOT_FOUND = 'USER_NOT_FOUND',
  USER_ALREADY_EXISTS = 'USER_ALREADY_EXISTS',
  INVALID_CREDENTIALS = 'INVALID_CREDENTIALS',

  // 포인트 관련 에러
  INSUFFICIENT_POINTS = 'INSUFFICIENT_POINTS',
  INVALID_POINT_AMOUNT = 'INVALID_POINT_AMOUNT',

  // 일반 에러
  BAD_REQUEST = 'BAD_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  INTERNAL_SERVER_ERROR = 'INTERNAL_SERVER_ERROR',
  SERVICE_UNAVAILABLE = 'SERVICE_UNAVAILABLE',

  // 동시성 관련 에러
  OPTIMISTIC_LOCK_ERROR = 'OPTIMISTIC_LOCK_ERROR',
  CONCURRENT_MODIFICATION = 'CONCURRENT_MODIFICATION',

  // 입력 유효성 관련 에러
  VALIDATION_ERROR = 'VALIDATION_ERROR',
  INVALID_INPUT = 'INVALID_INPUT',

  // 권한 관련 에러
  PERMISSION_DENIED = 'PERMISSION_DENIED',
  FORBIDDEN = 'FORBIDDEN',

  // 제한 관련 에러
  RATE_LIMIT_EXCEEDED = 'RATE_LIMIT_EXCEEDED',
  QUOTA_EXCEEDED = 'QUOTA_EXCEEDED',

  // 큐 관련 에러
  QUEUE_ALREADY_EXISTS = 'QUEUE_ALREADY_EXISTS',
  QUEUE_NOT_FOUND = 'QUEUE_NOT_FOUND',

  // 분산 락 획득 실패
  DISTRIBUTED_LOCK_FAILED = 'DISTRIBUTED_LOCK_FAILED',
}
