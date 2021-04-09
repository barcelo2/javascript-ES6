//Modifica la funció 'a()' per a reemplaçar la promesa per aync/await:

function b() {
  // tasques asíncrones , que triguen una estona..
}

// Ens esperem que la funció b acabi
async function a() {
  try {
    const c = await b();
  } catch {
    alert(err);
  }
}

a();
