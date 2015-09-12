describe('replaceWord', function() {

  it("returns a word and replace it with another word", function() {
    expect(replaceWord('morning', 'morning', 'coffee')).to.eql('coffee');
  });

  it("returns a specific word in a string with another word", function(){
    expect(replaceWord("hello world", "world", "universe")).to.eql("hello universe")
  });

  it("returns a multiple of the same word in a string, with another word", function () {
    expect(replaceWord("coffee coffee", "coffee", "water")).to.eql("water water")
  });

});
