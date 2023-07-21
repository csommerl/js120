console.log(this);

function dummy() {
  console.log(this);
}

dummy();

if (this === global) console.log('yes');
