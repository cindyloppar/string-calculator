var assert = require('assert')
var expect = require('chai').expect;
var should = require('chai').should();

function addIntString(string){
    var sum = 0;
    var replace = string.replace(/\n/g,',');
    var splitString = replace.split(',');

    if(string === ''){
        return 0;
    }else if(sum === Number(a) + Number(b)){
        return 3
    }
       
    return sum
}

    it(`should return 0 if it is an empty string`, function ()
    {
assert.equal('', 0);
    });

    it(`should return '1' when we adding the two string`, function()
{
assert.equal('1');
});
