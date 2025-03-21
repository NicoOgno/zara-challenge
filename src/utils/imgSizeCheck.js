export const imgSizeCheck = (phoneId) => {
  const big = ['XMI-RN13P5G', 'XIA-RN13', 'XMI-14', 'XMI-R13C', 'XMI-13TPro']
  if (big.includes(phoneId)) return 'bigImg'
  if (phoneId === 'XIA-R12') return 'biggerImg'
  if (phoneId === 'SMG-A35') return 'littleImg'
  else return ''
}
