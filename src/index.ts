import Root from "./components/Root";
import assynIsNumber from "./functions/asynch/assynIsNumber";

const assTest : Promise<boolean> = assynIsNumber(1);


Root();

assTest.then((result : boolean) : void => { console.log(result) });