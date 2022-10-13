var pronoun = ["the", "our"];
var adj = ["great", "big"];
var noun = ["jogger", "racoon"];
var ext = [".com"];

pronoun.forEach((pronombre) => {
  adj.forEach((adjetivo) => {
    noun.forEach((nombre) => {
      ext.forEach((extension) => {
        console.log(`${pronombre}${adjetivo}${nombre}${extension}`);
      });
    });
  });
});

var dominio = ["puedes", "love", "robocom", "panet"];

var ext = ["ve", "es", "com", "net"];

dominio.forEach((eDominio) => {
  ext.forEach((eExtension) => {
    //    console.log(`${eDominio}.${eExtension}`);
    //    console.log(eExtension.length);
    // //  console.log({eDominio.substr(1,2)})
    const size = eExtension.length && eExtension.length;
    eDominio.substr(-size, size) === eExtension
      ? console.log(`${eDominio.slice(0, -size)}.${eExtension}`)
      : console.log(`${eDominio}.${eExtension}`);

    // // console.log(`${ eDominio.substr(-2,2) }.${eExtension}`);
  });
});
