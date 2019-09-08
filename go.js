  const go = (i=2) => {
    console.log(i)
    ++i;
    if (i<=10) {
        go(i)
    };
  }
  go()
