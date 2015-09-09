describe('encrypt', function() {
  it("returns string with spaces removed", function() {
    expect(encrypt("a b")).to.equal("ab");
  });

  it("if string = 4 characters return 2 groups of 2", function() {
    expect(encrypt("abcd")).to.equal("ac bd");
  });

});
