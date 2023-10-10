gdjs.GuideCode = {};
gdjs.GuideCode.GDMain_95MenuObjects1= [];
gdjs.GuideCode.GDMain_95MenuObjects2= [];
gdjs.GuideCode.GDGuideObjects1= [];
gdjs.GuideCode.GDGuideObjects2= [];
gdjs.GuideCode.GDhowtoObjects1= [];
gdjs.GuideCode.GDhowtoObjects2= [];
gdjs.GuideCode.GDManualObjects1= [];
gdjs.GuideCode.GDManualObjects2= [];
gdjs.GuideCode.GDMain_95Menu1Objects1= [];
gdjs.GuideCode.GDMain_95Menu1Objects2= [];

gdjs.GuideCode.conditionTrue_0 = {val:false};
gdjs.GuideCode.condition0IsTrue_0 = {val:false};
gdjs.GuideCode.condition1IsTrue_0 = {val:false};
gdjs.GuideCode.condition2IsTrue_0 = {val:false};


gdjs.GuideCode.mapOfGDgdjs_46GuideCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.GuideCode.GDMain_95MenuObjects1});gdjs.GuideCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.GuideCode.GDMain_95MenuObjects1);

gdjs.GuideCode.condition0IsTrue_0.val = false;
gdjs.GuideCode.condition1IsTrue_0.val = false;
{
gdjs.GuideCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GuideCode.mapOfGDgdjs_46GuideCode_46GDMain_9595MenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GuideCode.condition0IsTrue_0.val ) {
{
gdjs.GuideCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.GuideCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


};

gdjs.GuideCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GuideCode.GDMain_95MenuObjects1.length = 0;
gdjs.GuideCode.GDMain_95MenuObjects2.length = 0;
gdjs.GuideCode.GDGuideObjects1.length = 0;
gdjs.GuideCode.GDGuideObjects2.length = 0;
gdjs.GuideCode.GDhowtoObjects1.length = 0;
gdjs.GuideCode.GDhowtoObjects2.length = 0;
gdjs.GuideCode.GDManualObjects1.length = 0;
gdjs.GuideCode.GDManualObjects2.length = 0;
gdjs.GuideCode.GDMain_95Menu1Objects1.length = 0;
gdjs.GuideCode.GDMain_95Menu1Objects2.length = 0;

gdjs.GuideCode.eventsList0(runtimeScene);
return;

}

gdjs['GuideCode'] = gdjs.GuideCode;
