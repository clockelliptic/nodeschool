promise = Promise.reject(new Error("\n\nListen, Morty, I hate to break it to you but what people call \"love\" is just a chemical reaction that compels animals to breed. It hits hard, Morty, then it slowly fades, leaving you stranded in a failing marriage...\n\n"));

promise.catch(function (err) {
  let count = 4;
  process.stderr.write(err.message);

  setTimeout(function advice() {
    --count;

    if (!count) {process.stderr.write("I did it. Your parents are gonna do it. Break the cycle, Morty. Rise above. Focus on science \n ----Rick Sanchez\n\n");}
    else if (count%2!==0) {setTimeout(advice, 6000)}
    else if (count%2===0) {process.stderr.write('...(awkward silence)...\n\n'); setTimeout(advice, 4000)}
  }, 1000);
});
