var gdjs;(function(w){let x;(function(e){const o=new w.Logger("AdMob");let n;(function(r){r[r.BANNER=0]="BANNER",r[r.LARGE_BANNER=1]="LARGE_BANNER",r[r.MEDIUM_RECTANGLE=2]="MEDIUM_RECTANGLE",r[r.FULL_BANNER=3]="FULL_BANNER",r[r.LEADERBOARD=4]="LEADERBOARD",r[r.SMART_BANNER=5]="SMART_BANNER"})(n=e.AdSizeType||(e.AdSizeType={}));let N="",v="",_="top",B=5,i=!1,A=!1,d=!1,s=!1,l=!1,R=!1,E=!1,f=!1,u=!1,p=!1,c=!1,L=!1,h="0";e.setTestMode=t=>{typeof admob!="undefined"&&admob.setDevMode(t)},e.isBannerLoading=()=>i,e.isBannerShowing=()=>d,e.isBannerErrored=()=>A,e.setupBanner=function(t,a,m){typeof admob!="undefined"&&(N=t,v=a,_=m?"top":"bottom")},e.setBannerAdSizeType=t=>{B={BANNER:0,LARGE_BANNER:1,MEDIUM_RECTANGLE:2,FULL_BANNER:3,LEADERBOARD:4,SMART_BANNER:5}[t]||5},e.showBanner=()=>{typeof admob!="undefined"&&(i=!0,d=!1,A=!1,admob.banner.show({id:{android:N,ios:v},position:_,size:B}).then(()=>{d=!0,i=!1,o.info("AdMob banner successfully shown.")},t=>{d=!1,i=!1,A=!0,o.error("Error while showing an AdMob banner:",t)}))},e.hideBanner=()=>{typeof admob!="undefined"&&(d=!1,admob.banner.hide({android:N,ios:v}))},e.isInterstitialLoading=()=>s,e.isInterstitialReady=()=>l,e.isInterstitialShowing=()=>E,e.isInterstitialErrored=()=>R,e.loadInterstitial=(t,a,m)=>{typeof admob!="undefined"&&(s||l||E||(s=!0,l=!1,R=!1,admob.interstitial.load({id:{android:t,ios:a},npa:h}).then(()=>{o.info("AdMob interstitial successfully loaded."),m&&e.showInterstitial()},b=>{s=!1,l=!1,R=!0,o.error("Error while loading a interstitial:",b)})))},e.showInterstitial=()=>{typeof admob!="undefined"&&admob.interstitial.show().then(()=>{},t=>{E=!1,R=!0,o.error("Error while trying to show an interstitial:",t)})},e.isVideoLoading=()=>f,e.isVideoReady=()=>u,e.isVideoShowing=()=>c,e.isVideoErrored=()=>p,e.wasVideoRewardReceived=function(t){const a=L;return t&&(L=!1),a},e.loadVideo=function(t,a,m){typeof admob!="undefined"&&(f||u||c||(f=!0,u=!1,p=!1,admob.rewardVideo.load({id:{android:t,ios:a},npa:h}).then(()=>{o.info("AdMob reward video successfully loaded."),m&&e.showVideo()},b=>{f=!1,u=!1,p=!0,o.error("Error while loading a reward video:",b)})))},e.showVideo=()=>{typeof admob!="undefined"&&admob.rewardVideo.show().then(()=>{},t=>{c=!1,p=!0,o.error("Error while trying to show a reward video:",t)})},e.markVideoRewardAsClaimed=()=>{L=!1},document.addEventListener("admob.banner.load",()=>{d=!0,i=!1}),document.addEventListener("admob.banner.load_fail",()=>{i=!1}),document.addEventListener("admob.banner.open",()=>{}),document.addEventListener("admob.banner.exit_app",()=>{}),document.addEventListener("admob.banner.close",()=>{}),document.addEventListener("admob.interstitial.load",()=>{l=!0,s=!1}),document.addEventListener("admob.interstitial.load_fail",()=>{s=!1}),document.addEventListener("admob.interstitial.open",()=>{E=!0,l=!1}),document.addEventListener("admob.interstitial.close",()=>{E=!1}),document.addEventListener("admob.interstitial.exit_app",()=>{}),document.addEventListener("admob.reward_video.load",()=>{u=!0,f=!1}),document.addEventListener("admob.reward_video.load_fail",()=>{f=!1}),document.addEventListener("admob.reward_video.open",()=>{c=!0,u=!1}),document.addEventListener("admob.reward_video.close",()=>{c=!1}),document.addEventListener("admob.reward_video.start",()=>{}),document.addEventListener("admob.reward_video.complete",()=>{}),document.addEventListener("admob.reward_video.reward",()=>{L=!0}),document.addEventListener("admob.reward_video.exit_app",()=>{})})(x=w.adMob||(w.adMob={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=admobtools.js.map
