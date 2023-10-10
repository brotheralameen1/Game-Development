gdjs.Level01Code = {};
gdjs.Level01Code.GDLockedDoor1Objects1= [];
gdjs.Level01Code.GDLockedDoor1Objects2= [];
gdjs.Level01Code.GDLockedDoor1Objects3= [];
gdjs.Level01Code.GDLockedDoorObjects1= [];
gdjs.Level01Code.GDLockedDoorObjects2= [];
gdjs.Level01Code.GDLockedDoorObjects3= [];
gdjs.Level01Code.GDDoorAllObjects1= [];
gdjs.Level01Code.GDDoorAllObjects2= [];
gdjs.Level01Code.GDDoorAllObjects3= [];
gdjs.Level01Code.GDBigDemonObjects1= [];
gdjs.Level01Code.GDBigDemonObjects2= [];
gdjs.Level01Code.GDBigDemonObjects3= [];
gdjs.Level01Code.GDNecromancerObjects1= [];
gdjs.Level01Code.GDNecromancerObjects2= [];
gdjs.Level01Code.GDNecromancerObjects3= [];
gdjs.Level01Code.GDTinyZombieObjects1= [];
gdjs.Level01Code.GDTinyZombieObjects2= [];
gdjs.Level01Code.GDTinyZombieObjects3= [];
gdjs.Level01Code.GDGoldKeyObjects1= [];
gdjs.Level01Code.GDGoldKeyObjects2= [];
gdjs.Level01Code.GDGoldKeyObjects3= [];
gdjs.Level01Code.GDYellowPotionObjects1= [];
gdjs.Level01Code.GDYellowPotionObjects2= [];
gdjs.Level01Code.GDYellowPotionObjects3= [];
gdjs.Level01Code.GDFloorObjects1= [];
gdjs.Level01Code.GDFloorObjects2= [];
gdjs.Level01Code.GDFloorObjects3= [];
gdjs.Level01Code.GDBorderObjects1= [];
gdjs.Level01Code.GDBorderObjects2= [];
gdjs.Level01Code.GDBorderObjects3= [];
gdjs.Level01Code.GDBorder2Objects1= [];
gdjs.Level01Code.GDBorder2Objects2= [];
gdjs.Level01Code.GDBorder2Objects3= [];
gdjs.Level01Code.GDSilverKeyObjects1= [];
gdjs.Level01Code.GDSilverKeyObjects2= [];
gdjs.Level01Code.GDSilverKeyObjects3= [];
gdjs.Level01Code.GDBulletObjects1= [];
gdjs.Level01Code.GDBulletObjects2= [];
gdjs.Level01Code.GDBulletObjects3= [];
gdjs.Level01Code.GDShootObjects1= [];
gdjs.Level01Code.GDShootObjects2= [];
gdjs.Level01Code.GDShootObjects3= [];
gdjs.Level01Code.GDPicSceneObjects1= [];
gdjs.Level01Code.GDPicSceneObjects2= [];
gdjs.Level01Code.GDPicSceneObjects3= [];
gdjs.Level01Code.GDRightObjects1= [];
gdjs.Level01Code.GDRightObjects2= [];
gdjs.Level01Code.GDRightObjects3= [];
gdjs.Level01Code.GDUpObjects1= [];
gdjs.Level01Code.GDUpObjects2= [];
gdjs.Level01Code.GDUpObjects3= [];
gdjs.Level01Code.GDDownObjects1= [];
gdjs.Level01Code.GDDownObjects2= [];
gdjs.Level01Code.GDDownObjects3= [];
gdjs.Level01Code.GDLeftObjects1= [];
gdjs.Level01Code.GDLeftObjects2= [];
gdjs.Level01Code.GDLeftObjects3= [];
gdjs.Level01Code.GDLevel2Objects1= [];
gdjs.Level01Code.GDLevel2Objects2= [];
gdjs.Level01Code.GDLevel2Objects3= [];
gdjs.Level01Code.GDInvisibleObjects1= [];
gdjs.Level01Code.GDInvisibleObjects2= [];
gdjs.Level01Code.GDInvisibleObjects3= [];
gdjs.Level01Code.GDGoldCoinObjects1= [];
gdjs.Level01Code.GDGoldCoinObjects2= [];
gdjs.Level01Code.GDGoldCoinObjects3= [];
gdjs.Level01Code.GDKeysObjects1= [];
gdjs.Level01Code.GDKeysObjects2= [];
gdjs.Level01Code.GDKeysObjects3= [];
gdjs.Level01Code.GDPotionsObjects1= [];
gdjs.Level01Code.GDPotionsObjects2= [];
gdjs.Level01Code.GDPotionsObjects3= [];
gdjs.Level01Code.GDCoinsObjects1= [];
gdjs.Level01Code.GDCoinsObjects2= [];
gdjs.Level01Code.GDCoinsObjects3= [];
gdjs.Level01Code.GDEnemiesObjects1= [];
gdjs.Level01Code.GDEnemiesObjects2= [];
gdjs.Level01Code.GDEnemiesObjects3= [];

gdjs.Level01Code.conditionTrue_0 = {val:false};
gdjs.Level01Code.condition0IsTrue_0 = {val:false};
gdjs.Level01Code.condition1IsTrue_0 = {val:false};
gdjs.Level01Code.condition2IsTrue_0 = {val:false};
gdjs.Level01Code.condition3IsTrue_0 = {val:false};
gdjs.Level01Code.condition4IsTrue_0 = {val:false};
gdjs.Level01Code.condition5IsTrue_0 = {val:false};


gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.Level01Code.GDBorderObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.Level01Code.GDBorderObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorder2Objects1Objects = Hashtable.newFrom({"Border2": gdjs.Level01Code.GDBorder2Objects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorder2Objects1Objects = Hashtable.newFrom({"Border2": gdjs.Level01Code.GDBorder2Objects1});gdjs.Level01Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.Level01Code.GDBorderObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorderObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level01Code.GDBorderObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorderObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Border2"), gdjs.Level01Code.GDBorder2Objects1);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorder2Objects1Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects1 */
/* Reuse gdjs.Level01Code.GDBorder2Objects1 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects1[i].separateFromObjectsList(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBorder2Objects1Objects, false);
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level01Code.GDNecromancerObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects = Hashtable.newFrom({"TinyZombie": gdjs.Level01Code.GDTinyZombieObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level01Code.GDBulletObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level01Code.GDNecromancerObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level01Code.GDBulletObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects = Hashtable.newFrom({"TinyZombie": gdjs.Level01Code.GDTinyZombieObjects2});gdjs.Level01Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level01Code.GDNecromancerObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TinyZombie"), gdjs.Level01Code.GDTinyZombieObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Lose", false);
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level01Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level01Code.GDNecromancerObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBulletObjects2 */
/* Reuse gdjs.Level01Code.GDNecromancerObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDNecromancerObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDNecromancerObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level01Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level01Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("TinyZombie"), gdjs.Level01Code.GDTinyZombieObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBulletObjects2 */
/* Reuse gdjs.Level01Code.GDTinyZombieObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDTinyZombieObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDTinyZombieObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level01Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Enemies"), gdjs.Level01Code.GDEnemiesObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDEnemiesObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDEnemiesObjects1[i].setString("Enemies:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects = Hashtable.newFrom({"Necromancer": gdjs.Level01Code.GDNecromancerObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level01Code.GDShootObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level01Code.GDBulletObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects = Hashtable.newFrom({"TinyZombie": gdjs.Level01Code.GDTinyZombieObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDShootObjects2Objects = Hashtable.newFrom({"Shoot": gdjs.Level01Code.GDShootObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level01Code.GDBulletObjects2});gdjs.Level01Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Necromancer"), gdjs.Level01Code.GDNecromancerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level01Code.GDShootObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
gdjs.Level01Code.condition1IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDNecromancerObjects2Objects, 100, false);
}if ( gdjs.Level01Code.condition0IsTrue_0.val ) {
{
gdjs.Level01Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDShootObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.Level01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
gdjs.Level01Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects, (( gdjs.Level01Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level01Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level01Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level01Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level01Code.GDBulletObjects2);
{for(var i = 0, len = gdjs.Level01Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBulletObjects2[i].addPolarForce(0, 500, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shoot"), gdjs.Level01Code.GDShootObjects2);
gdjs.copyArray(runtimeScene.getObjects("TinyZombie"), gdjs.Level01Code.GDTinyZombieObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
gdjs.Level01Code.condition1IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDTinyZombieObjects2Objects, 100, false);
}if ( gdjs.Level01Code.condition0IsTrue_0.val ) {
{
gdjs.Level01Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDShootObjects2Objects, runtimeScene, true, false);
}}
if (gdjs.Level01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
gdjs.Level01Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBulletObjects2Objects, (( gdjs.Level01Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level01Code.GDBigDemonObjects2[0].getPointX("")), (( gdjs.Level01Code.GDBigDemonObjects2.length === 0 ) ? 0 :gdjs.Level01Code.GDBigDemonObjects2[0].getPointY("")), "");
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level01Code.GDBulletObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDBulletObjects1[i].addPolarForce(0, 500, 0);
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDYellowPotionObjects2Objects = Hashtable.newFrom({"YellowPotion": gdjs.Level01Code.GDYellowPotionObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDInvisibleObjects2Objects = Hashtable.newFrom({"Invisible": gdjs.Level01Code.GDInvisibleObjects2});gdjs.Level01Code.eventsList3 = function(runtimeScene) {

{


gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Demonic Binaural III.wav", false, 100, 1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("YellowPotion"), gdjs.Level01Code.GDYellowPotionObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDYellowPotionObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDYellowPotionObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDYellowPotionObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDYellowPotionObjects2[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "BWAE.wav", true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Invisible"), gdjs.Level01Code.GDInvisibleObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDInvisibleObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Demonic Binaural III.wav", false, 50, 1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Potions"), gdjs.Level01Code.GDPotionsObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDPotionsObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDPotionsObjects1[i].setString("Potions:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDGoldKeyObjects2Objects = Hashtable.newFrom({"GoldKey": gdjs.Level01Code.GDGoldKeyObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDSilverKeyObjects2Objects = Hashtable.newFrom({"SilverKey": gdjs.Level01Code.GDSilverKeyObjects2});gdjs.Level01Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.Level01Code.GDGoldKeyObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDGoldKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDGoldKeyObjects2 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PicScene1");
}{for(var i = 0, len = gdjs.Level01Code.GDGoldKeyObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDGoldKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("SilverKey"), gdjs.Level01Code.GDSilverKeyObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDSilverKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDSilverKeyObjects2 */
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "PicScene2");
}{for(var i = 0, len = gdjs.Level01Code.GDSilverKeyObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDSilverKeyObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Keys"), gdjs.Level01Code.GDKeysObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDKeysObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDKeysObjects1[i].setString("Keys:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)));
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.Level01Code.GDRightObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDUpObjects2Objects = Hashtable.newFrom({"Up": gdjs.Level01Code.GDUpObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDownObjects2Objects = Hashtable.newFrom({"Down": gdjs.Level01Code.GDDownObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLeftObjects1Objects = Hashtable.newFrom({"Left": gdjs.Level01Code.GDLeftObjects1});gdjs.Level01Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Right"), gdjs.Level01Code.GDRightObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDRightObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].addPolarForce(0, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Up"), gdjs.Level01Code.GDUpObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDUpObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].addPolarForce(270, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Down"), gdjs.Level01Code.GDDownObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDownObjects2Objects, runtimeScene, true, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].addPolarForce(90, 40, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Left"), gdjs.Level01Code.GDLeftObjects1);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects1[i].addPolarForce(120, 40, 0);
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects2Objects = Hashtable.newFrom({"DoorAll": gdjs.Level01Code.GDDoorAllObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects1Objects = Hashtable.newFrom({"DoorAll": gdjs.Level01Code.GDDoorAllObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects1Objects = Hashtable.newFrom({"DoorAll": gdjs.Level01Code.GDDoorAllObjects1});gdjs.Level01Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("DoorAll"), gdjs.Level01Code.GDDoorAllObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
gdjs.Level01Code.condition1IsTrue_0.val = false;
gdjs.Level01Code.condition2IsTrue_0.val = false;
gdjs.Level01Code.condition3IsTrue_0.val = false;
gdjs.Level01Code.condition4IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level01Code.condition0IsTrue_0.val ) {
{
gdjs.Level01Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 4;
}if ( gdjs.Level01Code.condition1IsTrue_0.val ) {
{
gdjs.Level01Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) >= 3;
}if ( gdjs.Level01Code.condition2IsTrue_0.val ) {
{
gdjs.Level01Code.condition3IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) >= 2;
}if ( gdjs.Level01Code.condition3IsTrue_0.val ) {
{
gdjs.Level01Code.condition4IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) >= 1;
}}
}
}
}
if (gdjs.Level01Code.condition4IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level02");
}{gdjs.adMob.loadInterstitial("ca-app-pub-9806557752529441/7565578999", "", true);
}{gdjs.adMob.showInterstitial();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("DoorAll"), gdjs.Level01Code.GDDoorAllObjects1);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects1 */
/* Reuse gdjs.Level01Code.GDDoorAllObjects1 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects1[i].separateFromObjectsList(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDDoorAllObjects1Objects, false);
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects = Hashtable.newFrom({"LockedDoor": gdjs.Level01Code.GDLockedDoorObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects = Hashtable.newFrom({"LockedDoor": gdjs.Level01Code.GDLockedDoorObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects2Objects = Hashtable.newFrom({"LockedDoor1": gdjs.Level01Code.GDLockedDoor1Objects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects2Objects = Hashtable.newFrom({"LockedDoor1": gdjs.Level01Code.GDLockedDoor1Objects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects = Hashtable.newFrom({"LockedDoor": gdjs.Level01Code.GDLockedDoorObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects1});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects1Objects = Hashtable.newFrom({"LockedDoor1": gdjs.Level01Code.GDLockedDoor1Objects1});gdjs.Level01Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LockedDoor"), gdjs.Level01Code.GDLockedDoorObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level01Code.GDLockedDoorObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LockedDoor1"), gdjs.Level01Code.GDLockedDoor1Objects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDBigDemonObjects2 */
/* Reuse gdjs.Level01Code.GDLockedDoor1Objects2 */
{for(var i = 0, len = gdjs.Level01Code.GDBigDemonObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDBigDemonObjects2[i].separateFromObjectsList(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects2Objects, false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LockedDoor"), gdjs.Level01Code.GDLockedDoorObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
gdjs.Level01Code.condition1IsTrue_0.val = false;
gdjs.Level01Code.condition2IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoorObjects2Objects, false, runtimeScene, false);
}if ( gdjs.Level01Code.condition0IsTrue_0.val ) {
{
gdjs.Level01Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if ( gdjs.Level01Code.condition1IsTrue_0.val ) {
{
gdjs.Level01Code.condition2IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 2;
}}
}
if (gdjs.Level01Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDLockedDoorObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDLockedDoorObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDLockedDoorObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LockedDoor1"), gdjs.Level01Code.GDLockedDoor1Objects1);

gdjs.Level01Code.condition0IsTrue_0.val = false;
gdjs.Level01Code.condition1IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects1Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDLockedDoor1Objects1Objects, false, runtimeScene, false);
}if ( gdjs.Level01Code.condition0IsTrue_0.val ) {
{
gdjs.Level01Code.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}}
if (gdjs.Level01Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDLockedDoor1Objects1 */
{for(var i = 0, len = gdjs.Level01Code.GDLockedDoor1Objects1.length ;i < len;++i) {
    gdjs.Level01Code.GDLockedDoor1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects = Hashtable.newFrom({"BigDemon": gdjs.Level01Code.GDBigDemonObjects2});gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDGoldCoinObjects2Objects = Hashtable.newFrom({"GoldCoin": gdjs.Level01Code.GDGoldCoinObjects2});gdjs.Level01Code.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BigDemon"), gdjs.Level01Code.GDBigDemonObjects2);
gdjs.copyArray(runtimeScene.getObjects("GoldCoin"), gdjs.Level01Code.GDGoldCoinObjects2);

gdjs.Level01Code.condition0IsTrue_0.val = false;
{
gdjs.Level01Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDBigDemonObjects2Objects, gdjs.Level01Code.mapOfGDgdjs_46Level01Code_46GDGoldCoinObjects2Objects, false, runtimeScene, false);
}if (gdjs.Level01Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level01Code.GDGoldCoinObjects2 */
{for(var i = 0, len = gdjs.Level01Code.GDGoldCoinObjects2.length ;i < len;++i) {
    gdjs.Level01Code.GDGoldCoinObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Level01Code.GDCoinsObjects1);
{for(var i = 0, len = gdjs.Level01Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Level01Code.GDCoinsObjects1[i].setString("Coins:" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


};gdjs.Level01Code.eventsList9 = function(runtimeScene) {

{


gdjs.Level01Code.eventsList0(runtimeScene);
}


{


gdjs.Level01Code.eventsList1(runtimeScene);
}


{


gdjs.Level01Code.eventsList2(runtimeScene);
}


{


gdjs.Level01Code.eventsList3(runtimeScene);
}


{


gdjs.Level01Code.eventsList4(runtimeScene);
}


{


gdjs.Level01Code.eventsList5(runtimeScene);
}


{


gdjs.Level01Code.eventsList6(runtimeScene);
}


{


gdjs.Level01Code.eventsList7(runtimeScene);
}


{


gdjs.Level01Code.eventsList8(runtimeScene);
}


};

gdjs.Level01Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level01Code.GDLockedDoor1Objects1.length = 0;
gdjs.Level01Code.GDLockedDoor1Objects2.length = 0;
gdjs.Level01Code.GDLockedDoor1Objects3.length = 0;
gdjs.Level01Code.GDLockedDoorObjects1.length = 0;
gdjs.Level01Code.GDLockedDoorObjects2.length = 0;
gdjs.Level01Code.GDLockedDoorObjects3.length = 0;
gdjs.Level01Code.GDDoorAllObjects1.length = 0;
gdjs.Level01Code.GDDoorAllObjects2.length = 0;
gdjs.Level01Code.GDDoorAllObjects3.length = 0;
gdjs.Level01Code.GDBigDemonObjects1.length = 0;
gdjs.Level01Code.GDBigDemonObjects2.length = 0;
gdjs.Level01Code.GDBigDemonObjects3.length = 0;
gdjs.Level01Code.GDNecromancerObjects1.length = 0;
gdjs.Level01Code.GDNecromancerObjects2.length = 0;
gdjs.Level01Code.GDNecromancerObjects3.length = 0;
gdjs.Level01Code.GDTinyZombieObjects1.length = 0;
gdjs.Level01Code.GDTinyZombieObjects2.length = 0;
gdjs.Level01Code.GDTinyZombieObjects3.length = 0;
gdjs.Level01Code.GDGoldKeyObjects1.length = 0;
gdjs.Level01Code.GDGoldKeyObjects2.length = 0;
gdjs.Level01Code.GDGoldKeyObjects3.length = 0;
gdjs.Level01Code.GDYellowPotionObjects1.length = 0;
gdjs.Level01Code.GDYellowPotionObjects2.length = 0;
gdjs.Level01Code.GDYellowPotionObjects3.length = 0;
gdjs.Level01Code.GDFloorObjects1.length = 0;
gdjs.Level01Code.GDFloorObjects2.length = 0;
gdjs.Level01Code.GDFloorObjects3.length = 0;
gdjs.Level01Code.GDBorderObjects1.length = 0;
gdjs.Level01Code.GDBorderObjects2.length = 0;
gdjs.Level01Code.GDBorderObjects3.length = 0;
gdjs.Level01Code.GDBorder2Objects1.length = 0;
gdjs.Level01Code.GDBorder2Objects2.length = 0;
gdjs.Level01Code.GDBorder2Objects3.length = 0;
gdjs.Level01Code.GDSilverKeyObjects1.length = 0;
gdjs.Level01Code.GDSilverKeyObjects2.length = 0;
gdjs.Level01Code.GDSilverKeyObjects3.length = 0;
gdjs.Level01Code.GDBulletObjects1.length = 0;
gdjs.Level01Code.GDBulletObjects2.length = 0;
gdjs.Level01Code.GDBulletObjects3.length = 0;
gdjs.Level01Code.GDShootObjects1.length = 0;
gdjs.Level01Code.GDShootObjects2.length = 0;
gdjs.Level01Code.GDShootObjects3.length = 0;
gdjs.Level01Code.GDPicSceneObjects1.length = 0;
gdjs.Level01Code.GDPicSceneObjects2.length = 0;
gdjs.Level01Code.GDPicSceneObjects3.length = 0;
gdjs.Level01Code.GDRightObjects1.length = 0;
gdjs.Level01Code.GDRightObjects2.length = 0;
gdjs.Level01Code.GDRightObjects3.length = 0;
gdjs.Level01Code.GDUpObjects1.length = 0;
gdjs.Level01Code.GDUpObjects2.length = 0;
gdjs.Level01Code.GDUpObjects3.length = 0;
gdjs.Level01Code.GDDownObjects1.length = 0;
gdjs.Level01Code.GDDownObjects2.length = 0;
gdjs.Level01Code.GDDownObjects3.length = 0;
gdjs.Level01Code.GDLeftObjects1.length = 0;
gdjs.Level01Code.GDLeftObjects2.length = 0;
gdjs.Level01Code.GDLeftObjects3.length = 0;
gdjs.Level01Code.GDLevel2Objects1.length = 0;
gdjs.Level01Code.GDLevel2Objects2.length = 0;
gdjs.Level01Code.GDLevel2Objects3.length = 0;
gdjs.Level01Code.GDInvisibleObjects1.length = 0;
gdjs.Level01Code.GDInvisibleObjects2.length = 0;
gdjs.Level01Code.GDInvisibleObjects3.length = 0;
gdjs.Level01Code.GDGoldCoinObjects1.length = 0;
gdjs.Level01Code.GDGoldCoinObjects2.length = 0;
gdjs.Level01Code.GDGoldCoinObjects3.length = 0;
gdjs.Level01Code.GDKeysObjects1.length = 0;
gdjs.Level01Code.GDKeysObjects2.length = 0;
gdjs.Level01Code.GDKeysObjects3.length = 0;
gdjs.Level01Code.GDPotionsObjects1.length = 0;
gdjs.Level01Code.GDPotionsObjects2.length = 0;
gdjs.Level01Code.GDPotionsObjects3.length = 0;
gdjs.Level01Code.GDCoinsObjects1.length = 0;
gdjs.Level01Code.GDCoinsObjects2.length = 0;
gdjs.Level01Code.GDCoinsObjects3.length = 0;
gdjs.Level01Code.GDEnemiesObjects1.length = 0;
gdjs.Level01Code.GDEnemiesObjects2.length = 0;
gdjs.Level01Code.GDEnemiesObjects3.length = 0;

gdjs.Level01Code.eventsList9(runtimeScene);
return;

}

gdjs['Level01Code'] = gdjs.Level01Code;
