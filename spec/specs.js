describe('replaceWord', function() {

  it("return a word and replace it with another word", function() {
    expect(replaceWord('morning')).to.equal('coffee');
  });

  it("return a specific word in a string with another word", function(){
    expect(replaceWord('Hello World')).to.equal('Hello Universe')
  });

});
