export const imgSizeCheck = (phoneId) => {
  const big = ['XMI-RN13P5G', 'XIA-RN13', 'XMI-14', 'XMI-R13C', 'XMI-13TPro', 'RLM-NOTE50']
  if (big.includes(phoneId)) return 'bigImg'
  if (phoneId === 'XIA-R12') return 'biggerImg'
  if (phoneId === 'SMG-A35' || phoneId === "APL-IP13-128") return 'littleImg'
  else return ''
}
