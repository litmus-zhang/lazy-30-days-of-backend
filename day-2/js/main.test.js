const {jumpingYears} = require('./main');
describe("Jumping Years", ()=>{
    it("should return [2024,2028,2032]", ()=>{
        expect(jumpingYears(2020, 3)).toStrictEqual([2024,2028,2032]);
    })
    it("Should return the closest leap year when n = 0 or n= null", ()=>{
        expect(jumpingYears(2000, 0)).toBe(2004);
        expect(jumpingYears(2000, null)).toBe(2004);
    })
})