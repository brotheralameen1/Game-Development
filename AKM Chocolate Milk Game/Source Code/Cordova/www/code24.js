gdjs.WinCode = {};
gdjs.WinCode.GDWinnerObjects1= [];
gdjs.WinCode.GDWinnerObjects2= [];
gdjs.WinCode.GDCongratulationsObjects1= [];
gdjs.WinCode.GDCongratulationsObjects2= [];
gdjs.WinCode.GDYou_95WinObjects1= [];
gdjs.WinCode.GDYou_95WinObjects2= [];
gdjs.WinCode.GDMain_95MenuObjects1= [];
gdjs.WinCode.GDMain_95MenuObjects2= [];
gdjs.WinCode.GDScoresObjects1= [];
gdjs.WinCode.GDScoresObjects2= [];
gdjs.WinCode.GDScreenshotObjects1= [];
gdjs.WinCode.GDScreenshotObjects2= [];
gdjs.WinCode.GDPotionsObjects1= [];
gdjs.WinCode.GDPotionsObjects2= [];
gdjs.WinCode.GDCoinsObjects1= [];
gdjs.WinCode.GDCoinsObjects2= [];
gdjs.WinCode.GDEnemiesObjects1= [];
gdjs.WinCode.GDEnemiesObjects2= [];
gdjs.WinCode.GDKeysObjects1= [];
gdjs.WinCode.GDKeysObjects2= [];
gdjs.WinCode.GDInteraction_95NoteObjects1= [];
gdjs.WinCode.GDInteraction_95NoteObjects2= [];
gdjs.WinCode.GDSCObjects1= [];
gdjs.WinCode.GDSCObjects2= [];
gdjs.WinCode.GDMMObjects1= [];
gdjs.WinCode.GDMMObjects2= [];

gdjs.WinCode.conditionTrue_0 = {val:false};
gdjs.WinCode.condition0IsTrue_0 = {val:false};
gdjs.WinCode.condition1IsTrue_0 = {val:false};
gdjs.WinCode.condition2IsTrue_0 = {val:false};


gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMain_9595MenuObjects1Objects = Hashtable.newFrom({"Main_Menu": gdjs.WinCode.GDMain_95MenuObjects1});gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDScreenshotObjects1Objects = Hashtable.newFrom({"Screenshot": gdjs.WinCode.GDScreenshotObjects1});gdjs.WinCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Main_Menu"), gdjs.WinCode.GDMain_95MenuObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDMain_9595MenuObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main_Menu", true);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Screenshot"), gdjs.WinCode.GDScreenshotObjects1);

gdjs.WinCode.condition0IsTrue_0.val = false;
gdjs.WinCode.condition1IsTrue_0.val = false;
{
gdjs.WinCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.WinCode.mapOfGDgdjs_46WinCode_46GDScreenshotObjects1Objects, runtimeScene, true, false);
}if ( gdjs.WinCode.condition0IsTrue_0.val ) {
{
gdjs.WinCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.WinCode.condition1IsTrue_0.val) {
{gdjs.screenshot.takeScreenshot(runtimeScene, "Internal Storage/DCIM/AKM Chocolate Milk");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.WinCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.WinCode.GDEnemiesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.WinCode.GDKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Potions"), gdjs.WinCode.GDPotionsObjects1);
{for(var i = 0, len = gdjs.WinCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDCoinsObjects1[i].setString("Coins:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.WinCode.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDEnemiesObjects1[i].setString("Enemies:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.WinCode.GDPotionsObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDPotionsObjects1[i].setString("Potions:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.WinCode.GDKeysObjects1.length ;i < len;++i) {
    gdjs.WinCode.GDKeysObjects1[i].setString("Keys:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};

gdjs.WinCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WinCode.GDWinnerObjects1.length = 0;
gdjs.WinCode.GDWinnerObjects2.length = 0;
gdjs.WinCode.GDCongratulationsObjects1.length = 0;
gdjs.WinCode.GDCongratulationsObjects2.length = 0;
gdjs.WinCode.GDYou_95WinObjects1.length = 0;
gdjs.WinCode.GDYou_95WinObjects2.length = 0;
gdjs.WinCode.GDMain_95MenuObjects1.length = 0;
gdjs.WinCode.GDMain_95MenuObjects2.length = 0;
gdjs.WinCode.GDScoresObjects1.length = 0;
gdjs.WinCode.GDScoresObjects2.length = 0;
gdjs.WinCode.GDScreenshotObjects1.length = 0;
gdjs.WinCode.GDScreenshotObjects2.length = 0;
gdjs.WinCode.GDPotionsObjects1.length = 0;
gdjs.WinCode.GDPotionsObjects2.length = 0;
gdjs.WinCode.GDCoinsObjects1.length = 0;
gdjs.WinCode.GDCoinsObjects2.length = 0;
gdjs.WinCode.GDEnemiesObjects1.length = 0;
gdjs.WinCode.GDEnemiesObjects2.length = 0;
gdjs.WinCode.GDKeysObjects1.length = 0;
gdjs.WinCode.GDKeysObjects2.length = 0;
gdjs.WinCode.GDInteraction_95NoteObjects1.length = 0;
gdjs.WinCode.GDInteraction_95NoteObjects2.length = 0;
gdjs.WinCode.GDSCObjects1.length = 0;
gdjs.WinCode.GDSCObjects2.length = 0;
gdjs.WinCode.GDMMObjects1.length = 0;
gdjs.WinCode.GDMMObjects2.length = 0;

gdjs.WinCode.eventsList0(runtimeScene);
return;

}

gdjs['WinCode'] = gdjs.WinCode;
