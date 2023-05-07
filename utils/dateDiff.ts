/**
 *
 * @param {number} createdAt
 * @returns {string} 지난 시간
 */

export const dateDiff = (createdAt: number) => {
  const now = new Date()
  const diff = now.getTime() - createdAt

  if (diff < 0) {
    return '몇 초 전'
  }

  const seconds = Math.floor(diff / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)
  const months = Math.floor(days / 30)
  const years = Math.floor(months / 12)

  if (seconds < 60) {
    return `${seconds}초 전`
  } else if (minutes < 60) {
    return `${minutes}분 전`
  } else if (hours < 24) {
    return `${hours}시간 전`
  } else if (days < 30) {
    return `${days}일 전`
  } else if (months < 12) {
    return `${months}달 전`
  } else {
    return `${years}년 전`
  }
}
