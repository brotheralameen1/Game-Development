gdjs.PicScene11Code = {};
gdjs.PicScene11Code.GDUnlockingObjects1= [];
gdjs.PicScene11Code.GDUnlockingObjects2= [];
gdjs.PicScene11Code.GDLevel_95Secret_95PartObjects1= [];
gdjs.PicScene11Code.GDLevel_95Secret_95PartObjects2= [];
gdjs.PicScene11Code.GDI_95See_95YouObjects1= [];
gdjs.PicScene11Code.GDI_95See_95YouObjects2= [];

gdjs.PicScene11Code.conditionTrue_0 = {val:false};
gdjs.PicScene11Code.condition0IsTrue_0 = {val:false};
gdjs.PicScene11Code.condition1IsTrue_0 = {val:false};


gdjs.PicScene11Code.eventsList0 = function(runtimeScene) {

{


gdjs.PicScene11Code.condition0IsTrue_0.val = false;
{
gdjs.PicScene11Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 20, "PC11");
}if (gdjs.PicScene11Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "PC11");
}{gdjs.evtTools.runtimeScene.popScene(runtimeScene);
}}

}


};

gdjs.PicScene11Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PicScene11Code.GDUnlockingObjects1.length = 0;
gdjs.PicScene11Code.GDUnlockingObjects2.length = 0;
gdjs.PicScene11Code.GDLevel_95Secret_95PartObjects1.length = 0;
gdjs.PicScene11Code.GDLevel_95Secret_95PartObjects2.length = 0;
gdjs.PicScene11Code.GDI_95See_95YouObjects1.length = 0;
gdjs.PicScene11Code.GDI_95See_95YouObjects2.length = 0;

gdjs.PicScene11Code.eventsList0(runtimeScene);
return;

}

gdjs['PicScene11Code'] = gdjs.PicScene11Code;
