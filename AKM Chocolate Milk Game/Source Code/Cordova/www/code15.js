gdjs.PicScene8Code = {};
gdjs.PicScene8Code.GDPC8Objects1= [];
gdjs.PicScene8Code.GDPC8Objects2= [];
gdjs.PicScene8Code.GDStareObjects1= [];
gdjs.PicScene8Code.GDStareObjects2= [];

gdjs.PicScene8Code.conditionTrue_0 = {val:false};
gdjs.PicScene8Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene8Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene8Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene8Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PicScene8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Agio_O_Lucifer.wav", false, 100, 1);
}}

}


};gdjs.PicScene8Code.eventsList1 = function(runtimeScene) {

{


gdjs.PicScene8Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene8Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 50, "PC8");
}if (gdjs.PicScene8Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC8");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};gdjs.PicScene8Code.eventsList2 = function(runtimeScene) {

{


gdjs.PicScene8Code.eventsList0(runtimeScene);
}


{


gdjs.PicScene8Code.eventsList1(runtimeScene);
}


};

gdjs.PicScene8Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene8Code.GDPC8Objects1.length = 0;
gdjs.PicScene8Code.GDPC8Objects2.length = 0;
gdjs.PicScene8Code.GDStareObjects1.length = 0;
gdjs.PicScene8Code.GDStareObjects2.length = 0;

gdjs.PicScene8Code.eventsList2(runtimeScene);
return;

}

gdjs['PicScene8Code'] = gdjs.PicScene8Code;
