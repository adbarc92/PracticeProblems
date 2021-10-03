{
  const images = [
    'https://i.imgur.com/M36x4jw.jpg',
    'https://i.imgur.com/6SfbJkg.jpg',
    'https://i.imgur.com/FW3ehVy.jpg',
    'https://i.imgur.com/MgZ4f35.jpg',
    'https://i.imgur.com/PoaqwIJ.png',
    'https://fakeurlthatdoesntwork',
  ];

  const waitAsync = (ms: number): Promise<Function> => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  };

  // https://stackoverflow.com/questions/15999760/load-image-asynchronous
  const loadImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      let img = new Image();
      img.src = url;
      img.width = 512; // Aped
      img.classList.add('pos-abs fade-in');
      // If image loads, resolve promise
      img.onload = () => {
        resolve(img);
      };
      // If image fails to load, reject promise
      img.onerror = () => reject(new Error('Image failed to load'));
    });
  };

  // const fadeOutById = (id: string): void => {
  // 	const elem = document.getElementById(id);
  // 	elem.classList.add('fade-out');
  // };

  // const fadeInById =  (id: string): void => {
  //   const elem = document.getElementById(id);
  //   elem.classList.add('fade-in');
  // };

  // const clearElemClassById = (elemId: string): void => {
  // 	document.getElementById(elemId).classList.toggle('fade-out');
  // 	document.getElementById(elemId).classList.toggle('fade-in');
  // };

  // const setElemFadeOut = (elem: HTMLElement): void => {
  //   elem.classList.add('fade-out');
  // };

  // const setElemFadeIn = (elem: HTMLElement): void => {
  //   elem.classList.add('fade-in');
  // };

  // const removeElemFadeIn = (elem: HTMLImageElement): void => {
  //   elem.classList.toggle('fade-in');
  // };

  // const removeElemFadeOut = (elem: HTMLImageElement): void => {
  //   elem.classList.toggle('fade-out');
  // };

  // const displayElem = (elem: HTMLImageElement): void => {
  //   // document.body.innerHTML = '';
  //   document.body.appendChild(elem);
  // };

  const toggleElemFade = (elem: HTMLElement) => {
    elem.classList.toggle('img-fade');
  };

  const addElemToDom = (elem: HTMLImageElement): void => {
    document.body.append(elem);
  };

  const main = () => {
    let elemPromises = images.map((image) => {
      return loadImage(image);
    });
    Promise.allSettled(elemPromises).then(async (results) => {
      // Add all elements to DOM
      results.map((elem) => addElemToDom(elem.value));
      const l = results.length;
      for (let i = 0; i < l; i++) {
        const elem = document.getElementById(i.toString());
        toggleElemFade(elem);
        await waitAsync(2000);
      }
    });
  };
  main();
}
