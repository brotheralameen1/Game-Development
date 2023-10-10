gdjs.Level06Code = {};
gdjs.Level06Code.GDPotionsObjects1= [];
gdjs.Level06Code.GDPotionsObjects2= [];
gdjs.Level06Code.GDPotionsObjects3= [];
gdjs.Level06Code.GDCoinsObjects1= [];
gdjs.Level06Code.GDCoinsObjects2= [];
gdjs.Level06Code.GDCoinsObjects3= [];
gdjs.Level06Code.GDKeysObjects1= [];
gdjs.Level06Code.GDKeysObjects2= [];
gdjs.Level06Code.GDKeysObjects3= [];
gdjs.Level06Code.GDEnemiesObjects1= [];
gdjs.Level06Code.GDEnemiesObjects2= [];
gdjs.Level06Code.GDEnemiesObjects3= [];
gdjs.Level06Code.GDFloorObjects1= [];
gdjs.Level06Code.GDFloorObjects2= [];
gdjs.Level06Code.GDFloorObjects3= [];
gdjs.Level06Code.GDPokeyBubSpawnableObjects1= [];
gdjs.Level06Code.GDPokeyBubSpawnableObjects2= [];
gdjs.Level06Code.GDPokeyBubSpawnableObjects3= [];
gdjs.Level06Code.GDPokeyBubObjects1= [];
gdjs.Level06Code.GDPokeyBubObjects2= [];
gdjs.Level06Code.GDPokeyBubObjects3= [];
gdjs.Level06Code.GDLockedDoorObjects1= [];
gdjs.Level06Code.GDLockedDoorObjects2= [];
gdjs.Level06Code.GDLockedDoorObjects3= [];
gdjs.Level06Code.GDWinObjects1= [];
gdjs.Level06Code.GDWinObjects2= [];
gdjs.Level06Code.GDWinObjects3= [];
gdjs.Level06Code.GDFinishObjects1= [];
gdjs.Level06Code.GDFinishObjects2= [];
gdjs.Level06Code.GDFinishObjects3= [];
gdjs.Level06Code.GDBigDemonObjects1= [];
gdjs.Level06Code.GDBigDemonObjects2= [];
gdjs.Level06Code.GDBigDemonObjects3= [];
gdjs.Level06Code.GDBorder1Objects1= [];
gdjs.Level06Code.GDBorder1Objects2= [];
gdjs.Level06Code.GDBorder1Objects3= [];
gdjs.Level06Code.GDBorder2Objects1= [];
gdjs.Level06Code.GDBorder2Objects2= [];
gdjs.Level06Code.GDBorder2Objects3= [];
gdjs.Level06Code.GDShootObjects1= [];
gdjs.Level06Code.GDShootObjects2= [];
gdjs.Level06Code.GDShootObjects3= [];
gdjs.Level06Code.GDBulletObjects1= [];
gdjs.Level06Code.GDBulletObjects2= [];
gdjs.Level06Code.GDBulletObjects3= [];
gdjs.Level06Code.GDUpObjects1= [];
gdjs.Level06Code.GDUpObjects2= [];
gdjs.Level06Code.GDUpObjects3= [];
gdjs.Level06Code.GDDownObjects1= [];
gdjs.Level06Code.GDDownObjects2= [];
gdjs.Level06Code.GDDownObjects3= [];
gdjs.Level06Code.GDLeftObjects1= [];
gdjs.Level06Code.GDLeftObjects2= [];
gdjs.Level06Code.GDLeftObjects3= [];
gdjs.Level06Code.GDRightObjects1= [];
gdjs.Level06Code.GDRightObjects2= [];
gdjs.Level06Code.GDRightObjects3= [];
gdjs.Level06Code.GDGoldCoinObjects1= [];
gdjs.Level06Code.GDGoldCoinObjects2= [];
gdjs.Level06Code.GDGoldCoinObjects3= [];
gdjs.Level06Code.GDSilverKeyObjects1= [];
gdjs.Level06Code.GDSilverKeyObjects2= [];
gdjs.Level06Code.GDSilverKeyObjects3= [];
gdjs.Level06Code.GDGoldKeyObjects1= [];
gdjs.Level06Code.GDGoldKeyObjects2= [];
gdjs.Level06Code.GDGoldKeyObjects3= [];

gdjs.Level06Code.conditionTrue_0 = {val:false};
gdjs.Level06Code.condition0IsTrue_0 = {val:false};
gdjs.Level06Code.condition1IsTrue_0 = {val:false};
gdjs.Level06Code.condition2IsTrue_0 = {val:false};
gdjs.Level06Code.condition3IsTrue_0 = {val:false};


gdjs.Level06Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Misc/y2mate.com - Pokemon.mp3", true, 100, 1);
}}

}


};gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder1Objects2Objects = Hashtable.newFrom({"Border1": gdjs.Level06Code.GDBorder1Objects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder1Objects2Objects = Hashtable.newFrom({"Border1": gdjs.Level06Code.GDBorder1Objects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects1});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder2Objects1Objects = Hashtable.newFrom({"Border2": gdjs.Level06Code.GDBorder2Objects1});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder2Objects1Objects = Hashtable.newFrom({"Border2": gdjs.Level06Code.GDBorder2Objects1});gdjs.Level06Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border1"), gdjs.Level06Code.GDBorder1Objects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level06Code.GDBorder1Objects2 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder1Objects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Border2"), gdjs.Level06Code.GDBorder2Objects1);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects1Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects1 */
/* Reuse gdjs.Level06Code.GDBorder2Objects1 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects1[i].separateFromObjectsList(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBorder2Objects1Objects, false);
}
}}

}


};gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects = Hashtable.newFrom({"Win": gdjs.Level06Code.GDWinObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects = Hashtable.newFrom({"Win": gdjs.Level06Code.GDWinObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects = Hashtable.newFrom({"Win": gdjs.Level06Code.GDWinObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLockedDoorObjects2Objects = Hashtable.newFrom({"LockedDoor": gdjs.Level06Code.GDLockedDoorObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLockedDoorObjects2Objects = Hashtable.newFrom({"LockedDoor": gdjs.Level06Code.GDLockedDoorObjects2});gdjs.Level06Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Level06Code.GDWinObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Win", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Level06Code.GDWinObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level06Code.GDWinObjects2 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDWinObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LockedDoor"), gdjs.Level06Code.GDLockedDoorObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLockedDoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level06Code.GDLockedDoorObjects2 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLockedDoorObjects2Objects, false);
}
}}

}


{


gdjs.Level06Code.condition0IsTrue_0.val = false;
gdjs.Level06Code.condition1IsTrue_0.val = false;
gdjs.Level06Code.condition2IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 26;
}if ( gdjs.Level06Code.condition0IsTrue_0.val ) {
{
gdjs.Level06Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 45;
}if ( gdjs.Level06Code.condition1IsTrue_0.val ) {
{
gdjs.Level06Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= 15;
}}
}
if (gdjs.Level06Code.condition2IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LockedDoor"), gdjs.Level06Code.GDLockedDoorObjects1);
{for(var i = 0, len = gdjs.Level06Code.GDLockedDoorObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDLockedDoorObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects = Hashtable.newFrom({"PokeyBub": gdjs.Level06Code.GDPokeyBubObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects = Hashtable.newFrom({"PokeyBubSpawnable": gdjs.Level06Code.GDPokeyBubSpawnableObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level06Code.GDShootObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects = Hashtable.newFrom({"PokeyBub": gdjs.Level06Code.GDPokeyBubObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level06Code.GDBulletObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level06Code.GDShootObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects = Hashtable.newFrom({"PokeyBubSpawnable": gdjs.Level06Code.GDPokeyBubSpawnableObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level06Code.GDBulletObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level06Code.GDBulletObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects = Hashtable.newFrom({"PokeyBub": gdjs.Level06Code.GDPokeyBubObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Level06Code.GDGoldCoinObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level06Code.GDBulletObjects1});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects1Objects = Hashtable.newFrom({"PokeyBubSpawnable": gdjs.Level06Code.GDPokeyBubSpawnableObjects1});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.Level06Code.GDGoldKeyObjects1});gdjs.Level06Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PokeyBub"), gdjs.Level06Code.GDPokeyBubObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PokeyBubSpawnable"), gdjs.Level06Code.GDPokeyBubSpawnableObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PokeyBub"), gdjs.Level06Code.GDPokeyBubObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level06Code.GDShootObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
gdjs.Level06Code.condition1IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDShootObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level06Code.condition0IsTrue_0.val ) {
{
gdjs.Level06Code.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects, 100, false);
}}
if (gdjs.Level06Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
gdjs.Level06Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects, (( gdjs.Level06Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level06Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level06Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level06Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level06Code.GDBulletObjects2);
{for(var i = 0, len = gdjs.Level06Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBulletObjects2[i].addPolarForce(0, 500, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("PokeyBubSpawnable"), gdjs.Level06Code.GDPokeyBubSpawnableObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level06Code.GDShootObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
gdjs.Level06Code.condition1IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDShootObjects2Objects, runtimeScene, true, false);
}if ( gdjs.Level06Code.condition0IsTrue_0.val ) {
{
gdjs.Level06Code.condition1IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects, 100, false);
}}
if (gdjs.Level06Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDBigDemonObjects2 */
gdjs.Level06Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects, (( gdjs.Level06Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level06Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level06Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level06Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level06Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("PokeyBub"), gdjs.Level06Code.GDPokeyBubObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDPokeyBubObjects2 */
gdjs.Level06Code.GDGoldCoinObjects2.length = 0;

{for(var i = 0, len = gdjs.Level06Code.GDPokeyBubObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDPokeyBubObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldCoinObjects2Objects, 377, 60, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level06Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("PokeyBubSpawnable"), gdjs.Level06Code.GDPokeyBubSpawnableObjects1);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBulletObjects1Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDPokeyBubSpawnableObjects1 */
gdjs.Level06Code.GDGoldKeyObjects1.length = 0;

{for(var i = 0, len = gdjs.Level06Code.GDPokeyBubSpawnableObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDPokeyBubSpawnableObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldKeyObjects1Objects, 2, 58, "");
}}

}


};gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Level06Code.GDGoldCoinObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDSilverKeyObjects2Objects = Hashtable.newFrom({"SilverKey": gdjs.Level06Code.GDSilverKeyObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDSilverKeyObjects2Objects = Hashtable.newFrom({"SilverKey": gdjs.Level06Code.GDSilverKeyObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects = Hashtable.newFrom({"PokeyBubSpawnable": gdjs.Level06Code.GDPokeyBubSpawnableObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level06Code.GDBigDemonObjects1});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.Level06Code.GDGoldKeyObjects1});gdjs.Level06Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Level06Code.GDGoldCoinObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDGoldCoinObjects2 */
gdjs.Level06Code.GDSilverKeyObjects2.length = 0;

{for(var i = 0, len = gdjs.Level06Code.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDGoldCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDSilverKeyObjects2Objects, 404, 365, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SilverKey"), gdjs.Level06Code.GDSilverKeyObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects2Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDSilverKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDSilverKeyObjects2 */
gdjs.Level06Code.GDPokeyBubSpawnableObjects2.length = 0;

{for(var i = 0, len = gdjs.Level06Code.GDSilverKeyObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDSilverKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDPokeyBubSpawnableObjects2Objects, 297, 59, "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Level06Code.GDGoldKeyObjects1);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDBigDemonObjects1Objects, gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDGoldKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level06Code.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.Level06Code.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDGoldKeyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


};gdjs.Level06Code.eventsList5 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level06Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.Level06Code.GDEnemiesObjects1);
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Level06Code.GDKeysObjects1);
gdjs.copyArray(runtimeScene.getObjects("Potions"), gdjs.Level06Code.GDPotionsObjects1);
{for(var i = 0, len = gdjs.Level06Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDCoinsObjects1[i].setString("Coins:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}{for(var i = 0, len = gdjs.Level06Code.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDEnemiesObjects1[i].setString("Enemies:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}{for(var i = 0, len = gdjs.Level06Code.GDPotionsObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDPotionsObjects1[i].setString("Potions:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Level06Code.GDKeysObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDKeysObjects1[i].setString("Keys:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.Level06Code.GDRightObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.Level06Code.GDDownObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.Level06Code.GDUpObjects2});gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level06Code.GDLeftObjects1});gdjs.Level06Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level06Code.GDRightObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDRightObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].addPolarForce(0, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.Level06Code.GDDownObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDDownObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].addPolarForce(90, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.Level06Code.GDUpObjects2);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDUpObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects2[i].addPolarForce(270, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level06Code.GDLeftObjects1);

gdjs.Level06Code.condition0IsTrue_0.val = false;
{
gdjs.Level06Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level06Code.mapOfGDgdjs_46Level06Code_46GDLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level06Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level06Code.GDBigDemonObjects1);
{for(var i = 0, len = gdjs.Level06Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level06Code.GDBigDemonObjects1[i].addPolarForce(120, 40, 0);
}
}}

}


};gdjs.Level06Code.eventsList7 = function(runtimeScene) {

{


gdjs.Level06Code.eventsList0(runtimeScene);
}


{


gdjs.Level06Code.eventsList1(runtimeScene);
}


{


gdjs.Level06Code.eventsList2(runtimeScene);
}


{


gdjs.Level06Code.eventsList3(runtimeScene);
}


{


gdjs.Level06Code.eventsList4(runtimeScene);
}


{


gdjs.Level06Code.eventsList5(runtimeScene);
}


{


gdjs.Level06Code.eventsList6(runtimeScene);
}


};

gdjs.Level06Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level06Code.GDPotionsObjects1.length = 0;
gdjs.Level06Code.GDPotionsObjects2.length = 0;
gdjs.Level06Code.GDPotionsObjects3.length = 0;
gdjs.Level06Code.GDCoinsObjects1.length = 0;
gdjs.Level06Code.GDCoinsObjects2.length = 0;
gdjs.Level06Code.GDCoinsObjects3.length = 0;
gdjs.Level06Code.GDKeysObjects1.length = 0;
gdjs.Level06Code.GDKeysObjects2.length = 0;
gdjs.Level06Code.GDKeysObjects3.length = 0;
gdjs.Level06Code.GDEnemiesObjects1.length = 0;
gdjs.Level06Code.GDEnemiesObjects2.length = 0;
gdjs.Level06Code.GDEnemiesObjects3.length = 0;
gdjs.Level06Code.GDFloorObjects1.length = 0;
gdjs.Level06Code.GDFloorObjects2.length = 0;
gdjs.Level06Code.GDFloorObjects3.length = 0;
gdjs.Level06Code.GDPokeyBubSpawnableObjects1.length = 0;
gdjs.Level06Code.GDPokeyBubSpawnableObjects2.length = 0;
gdjs.Level06Code.GDPokeyBubSpawnableObjects3.length = 0;
gdjs.Level06Code.GDPokeyBubObjects1.length = 0;
gdjs.Level06Code.GDPokeyBubObjects2.length = 0;
gdjs.Level06Code.GDPokeyBubObjects3.length = 0;
gdjs.Level06Code.GDLockedDoorObjects1.length = 0;
gdjs.Level06Code.GDLockedDoorObjects2.length = 0;
gdjs.Level06Code.GDLockedDoorObjects3.length = 0;
gdjs.Level06Code.GDWinObjects1.length = 0;
gdjs.Level06Code.GDWinObjects2.length = 0;
gdjs.Level06Code.GDWinObjects3.length = 0;
gdjs.Level06Code.GDFinishObjects1.length = 0;
gdjs.Level06Code.GDFinishObjects2.length = 0;
gdjs.Level06Code.GDFinishObjects3.length = 0;
gdjs.Level06Code.GDBigDemonObjects1.length = 0;
gdjs.Level06Code.GDBigDemonObjects2.length = 0;
gdjs.Level06Code.GDBigDemonObjects3.length = 0;
gdjs.Level06Code.GDBorder1Objects1.length = 0;
gdjs.Level06Code.GDBorder1Objects2.length = 0;
gdjs.Level06Code.GDBorder1Objects3.length = 0;
gdjs.Level06Code.GDBorder2Objects1.length = 0;
gdjs.Level06Code.GDBorder2Objects2.length = 0;
gdjs.Level06Code.GDBorder2Objects3.length = 0;
gdjs.Level06Code.GDShootObjects1.length = 0;
gdjs.Level06Code.GDShootObjects2.length = 0;
gdjs.Level06Code.GDShootObjects3.length = 0;
gdjs.Level06Code.GDBulletObjects1.length = 0;
gdjs.Level06Code.GDBulletObjects2.length = 0;
gdjs.Level06Code.GDBulletObjects3.length = 0;
gdjs.Level06Code.GDUpObjects1.length = 0;
gdjs.Level06Code.GDUpObjects2.length = 0;
gdjs.Level06Code.GDUpObjects3.length = 0;
gdjs.Level06Code.GDDownObjects1.length = 0;
gdjs.Level06Code.GDDownObjects2.length = 0;
gdjs.Level06Code.GDDownObjects3.length = 0;
gdjs.Level06Code.GDLeftObjects1.length = 0;
gdjs.Level06Code.GDLeftObjects2.length = 0;
gdjs.Level06Code.GDLeftObjects3.length = 0;
gdjs.Level06Code.GDRightObjects1.length = 0;
gdjs.Level06Code.GDRightObjects2.length = 0;
gdjs.Level06Code.GDRightObjects3.length = 0;
gdjs.Level06Code.GDGoldCoinObjects1.length = 0;
gdjs.Level06Code.GDGoldCoinObjects2.length = 0;
gdjs.Level06Code.GDGoldCoinObjects3.length = 0;
gdjs.Level06Code.GDSilverKeyObjects1.length = 0;
gdjs.Level06Code.GDSilverKeyObjects2.length = 0;
gdjs.Level06Code.GDSilverKeyObjects3.length = 0;
gdjs.Level06Code.GDGoldKeyObjects1.length = 0;
gdjs.Level06Code.GDGoldKeyObjects2.length = 0;
gdjs.Level06Code.GDGoldKeyObjects3.length = 0;

gdjs.Level06Code.eventsList7(runtimeScene);
return;

}

gdjs['Level06Code'] = gdjs.Level06Code;
