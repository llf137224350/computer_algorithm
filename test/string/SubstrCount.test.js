import SubstrCount from '../../code/string/SubstrCount'

test('00110011', () => {
  expect(SubstrCount('00110011')).toEqual(['0011', '01', '1100', '10', '0011', '01'])
})

test('10101', () => {
  expect(SubstrCount('10101')).toEqual(['10', '01', '10', '01'])
})
