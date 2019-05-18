async function oneOff()
{
    console.log("One off script for spot dev testing");
}
oneOff().then(()=>console.log('finished')).catch((e)=>console.error(e));
