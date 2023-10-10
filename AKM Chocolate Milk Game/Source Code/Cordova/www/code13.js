gdjs.PicScene6Code = {};
gdjs.PicScene6Code.GDPicScene61Objects1= [];
gdjs.PicScene6Code.GDPicScene61Objects2= [];
gdjs.PicScene6Code.GDTimeObjects1= [];
gdjs.PicScene6Code.GDTimeObjects2= [];

gdjs.PicScene6Code.conditionTrue_0 = {val:false};
gdjs.PicScene6Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene6Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene6Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene6Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PicScene6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "SadSatan4.wav", false, 100, 1);
}}

}


};gdjs.PicScene6Code.eventsList1 = function(runtimeScene) {

{


gdjs.PicScene6Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene6Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 50, "pc6");
}if (gdjs.PicScene6Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pc6");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PicScene6Code.eventsList2 = function(runtimeScene) {

{


gdjs.PicScene6Code.eventsList0(runtimeScene);
}


{


gdjs.PicScene6Code.eventsList1(runtimeScene);
}


};

gdjs.PicScene6Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene6Code.GDPicScene61Objects1.length = 0;
gdjs.PicScene6Code.GDPicScene61Objects2.length = 0;
gdjs.PicScene6Code.GDTimeObjects1.length = 0;
gdjs.PicScene6Code.GDTimeObjects2.length = 0;

gdjs.PicScene6Code.eventsList2(runtimeScene);
return;

}

gdjs['PicScene6Code'] = gdjs.PicScene6Code;
