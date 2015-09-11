describe('pigLatin', function() {

  it("will add ay to the end of a word starting with a vowel", function() {
    expect(pigLatin('apple')).to.equal('appleay');
  });

  it("will describe words that start with one consonant", function() {
    expect(pigLatin('banana')).to.equal('ananabay');
  });
  

});
