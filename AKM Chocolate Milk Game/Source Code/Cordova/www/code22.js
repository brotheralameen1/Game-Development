gdjs.ConfirmationCode = {};
gdjs.ConfirmationCode.GDConfirmObjects1= [];
gdjs.ConfirmationCode.GDConfirmObjects2= [];
gdjs.ConfirmationCode.GDConfObjects1= [];
gdjs.ConfirmationCode.GDConfObjects2= [];
gdjs.ConfirmationCode.GDContinueObjects1= [];
gdjs.ConfirmationCode.GDContinueObjects2= [];
gdjs.ConfirmationCode.GDMain_95MenuObjects1= [];
gdjs.ConfirmationCode.GDMain_95MenuObjects2= [];
gdjs.ConfirmationCode.GDRestart_95GameObjects1= [];
gdjs.ConfirmationCode.GDRestart_95GameObjects2= [];
gdjs.ConfirmationCode.GDRestartObjects1= [];
gdjs.ConfirmationCode.GDRestartObjects2= [];
gdjs.ConfirmationCode.GDMMObjects1= [];
gdjs.ConfirmationCode.GDMMObjects2= [];
gdjs.ConfirmationCode.GDContObjects1= [];
gdjs.ConfirmationCode.GDContObjects2= [];
gdjs.ConfirmationCode.GDConf_95WinWizObjects1= [];
gdjs.ConfirmationCode.GDConf_95WinWizObjects2= [];
gdjs.ConfirmationCode.GDAction_95NoticeObjects1= [];
gdjs.ConfirmationCode.GDAction_95NoticeObjects2= [];

gdjs.ConfirmationCode.conditionTrue_0 = {val:false};
gdjs.ConfirmationCode.condition0IsTrue_0 = {val:false};
gdjs.ConfirmationCode.condition1IsTrue_0 = {val:false};
gdjs.ConfirmationCode.condition2IsTrue_0 = {val:false};


gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.ConfirmationCode.GDMain_95MenuObjects1});gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDContinueObjects1Objects = Hashtable.newFrom({"Continue": gdjs.ConfirmationCode.GDContinueObjects1});gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDRestart_9595GameObjects1Objects = Hashtable.newFrom({"Restart_Game": gdjs.ConfirmationCode.GDRestart_95GameObjects1});gdjs.ConfirmationCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.ConfirmationCode.GDMain_95MenuObjects1);

gdjs.ConfirmationCode.condition0IsTrue_0.val = false;
gdjs.ConfirmationCode.condition1IsTrue_0.val = false;
{
gdjs.ConfirmationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDMain_9595MenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ConfirmationCode.condition0IsTrue_0.val ) {
{
gdjs.ConfirmationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ConfirmationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Continue"), gdjs.ConfirmationCode.GDContinueObjects1);

gdjs.ConfirmationCode.condition0IsTrue_0.val = false;
gdjs.ConfirmationCode.condition1IsTrue_0.val = false;
{
gdjs.ConfirmationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDContinueObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ConfirmationCode.condition0IsTrue_0.val ) {
{
gdjs.ConfirmationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ConfirmationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level06", true);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_Game"), gdjs.ConfirmationCode.GDRestart_95GameObjects1);

gdjs.ConfirmationCode.condition0IsTrue_0.val = false;
gdjs.ConfirmationCode.condition1IsTrue_0.val = false;
{
gdjs.ConfirmationCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ConfirmationCode.mapOfGDgdjs_46ConfirmationCode_46GDRestart_9595GameObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ConfirmationCode.condition0IsTrue_0.val ) {
{
gdjs.ConfirmationCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ConfirmationCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level01", true);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


};

gdjs.ConfirmationCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ConfirmationCode.GDConfirmObjects1.length = 0;
gdjs.ConfirmationCode.GDConfirmObjects2.length = 0;
gdjs.ConfirmationCode.GDConfObjects1.length = 0;
gdjs.ConfirmationCode.GDConfObjects2.length = 0;
gdjs.ConfirmationCode.GDContinueObjects1.length = 0;
gdjs.ConfirmationCode.GDContinueObjects2.length = 0;
gdjs.ConfirmationCode.GDMain_95MenuObjects1.length = 0;
gdjs.ConfirmationCode.GDMain_95MenuObjects2.length = 0;
gdjs.ConfirmationCode.GDRestart_95GameObjects1.length = 0;
gdjs.ConfirmationCode.GDRestart_95GameObjects2.length = 0;
gdjs.ConfirmationCode.GDRestartObjects1.length = 0;
gdjs.ConfirmationCode.GDRestartObjects2.length = 0;
gdjs.ConfirmationCode.GDMMObjects1.length = 0;
gdjs.ConfirmationCode.GDMMObjects2.length = 0;
gdjs.ConfirmationCode.GDContObjects1.length = 0;
gdjs.ConfirmationCode.GDContObjects2.length = 0;
gdjs.ConfirmationCode.GDConf_95WinWizObjects1.length = 0;
gdjs.ConfirmationCode.GDConf_95WinWizObjects2.length = 0;
gdjs.ConfirmationCode.GDAction_95NoticeObjects1.length = 0;
gdjs.ConfirmationCode.GDAction_95NoticeObjects2.length = 0;

gdjs.ConfirmationCode.eventsList0(runtimeScene);
return;

}

gdjs['ConfirmationCode'] = gdjs.ConfirmationCode;
