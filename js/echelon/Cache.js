Echelon.TimeDependentDataCacheObject=function(d){this.getMinDeltaTime=function(){return x.minDeltaTime};this.p_onNewDataInRangeFinalize=function(){return true};this.p_cacheCleanupFinalize=function(){};this.p_getResponseSuccessful=function(){};this.p_insertInit=function(z){};this.p_refreshRange=function(){};this.getStatusStr=function(z){if(z.UCPTpointStatus.get()==null){return""}if(z.UCPTpointStatus.get()=="AL_NO_CONDITION"){return"ONLINE"}return z.UCPTpointStatus.get().substr(3)};this.getTimeMs=function(z){return z[x.m_timeNode].getTime()};this.displaySingleDp=function(z,A){t();x.newDisplayList.push(m.getObjectViaKey(x.everEncountered,z,A));x.clearCache();if(a!=null){a()}};this.getCacheSize=function(){return x.cache.length};this.getMostRecentItem=function(z){return i[z]};this.getDatapointsLeftOfTime=function(G){var F=new Object();var B=x.f_getChunk(G);if(B){var z=f(G);if(z!=null){var A=Math.max(z-100,0);var E;var D=0;for(var C=z;C>=A&&(B=="CACHE_COMPLETE"||x.getTimeMs(x.cache[C])>=B[0]);C--){E=x.getKey(x.cache[C]);if(!F[E]){F[E]=x.cache[C];if((++D)>=x.newDisplayList.length){return F}}}}}return F};this.f_getChunk=function(){return"CACHE_COMPLETE"};this.getLogLevel=function(){return y};this.getTzOffsetMs=function(){return 0};this.clearCallbacks=function(){x.r_dead=true;for(var z=0;z<x.callbackRegistrationFunctions.length;z++){x.callbackRegistrationFunctions[z](null)}u.unsubscribe({type:"DpTimeRange_Data",Item:b.nameOfTimeRangeDp,callback:c});if(x.stopReading){x.stopReading()}};this.displayAll=function(){t();for(var z=0;z<x.everEncountered.length;z++){x.newDisplayList.push(x.everEncountered[z])}x.clearCache();if(a!=null){a()}};this.p_setActiveRangeInit=function(){};this.p_activeRangeChangedSubstantially=function(){};this.p_reset=function(){x.clearCache();x.stopTime=null;x.startTime=null;if(h!=null){h.min.setTime(0,this);h.max.setTime(0,this)}x.r_loggerColl.Item.clear()};this.clearCache=function(z){if(z==null){z=true}x.cache.length=0;if(z){x.clearCollection()}if(a!=null){a()}x.p_cacheCleanupFinalize()};this.clearCollection=function(){w.Item.clear()};this.getDisplayList=function(){return x.newDisplayList};this.getConfigViaKey=function(z){return m.getObjectViaKey(x.newDisplayList,z,x.getKey)};this.getConfigViaItem=function(z){return m.getObjectViaKey(x.newDisplayList,x.getKey(z),x.getKey)};this.removeDatasetFromDisplay=function(A){if(m.getObjectViaKey(x.newDisplayList,A,x.getKey)==null){return}for(var z=0;z<x.cache.length;z++){if(x.getKey(x.cache[z])==A){x.cache.splice(z--,1)}}x.p_refreshRange();m.removeViaKey(x.newDisplayList,A,x.getKey);x.newDataInRange()};this.remove=function(z){if(typeof z=="object"){m.removeViaObject(x.cache,z,x.getKey)}else{m.removeViaKey(x.cache,z,x.getKey)}};var c=function(C){if(C.isInFlux.get()==false){x.p_setActiveRangeInit();var B=C.from.getTime();var A=C.to.getTime();if(B<x.startTime){B=x.startTime}if(A>x.stopTime){A=x.stopTime}var z=x.r_activeRangeStop-x.r_activeRangeStart;if((z*0.9)>(A-B)){x.p_activeRangeChangedSubstantially(z);v=0}x.r_activeRangeStart=B;x.r_activeRangeStop=A;x.newDataInRange();x.p_onNewDataInRangeFinalize()}};this.f_desiredNumberOfSupportingPoints=function(){return x.f_maxPoints};this.newDataInRange=function(){var z=l(x.r_activeRangeStart-1);var H=f(x.r_activeRangeStop+1);var D=w.Item.length;x.f_clearCollectionSuspended=false;if(x.f_activeRangeCachedCompletely&&j&&x.r_timeRangeDp.isRightBorder.get()&&q&&x.r_randomSampleMode&&H!=null&&D&&((new Date()).getTime()-e)<v){if(x.r_overflowDp){x.r_overflowDp.value.set(true)}return}q=x.r_timeRangeDp&&x.r_timeRangeDp.isRightBorder.get();j=x.f_activeRangeCachedCompletely;e=(new Date()).getTime();if(H!=null&&z!=null){w.Item.clear();x.f_clearCollectionSuspended=false;var A=0;var L=null;var B=0;var J,M,K,E;var G=new Object();if(H-z>x.f_maxPoints){if(x.r_overflowDp){x.r_overflowDp.value.set(true)}if(x.r_randomSampleMode){var I=x.r_activeRangeStop-x.r_activeRangeStart;var F=g.getOptimalTimeInterval(I,x.f_desiredNumberOfSupportingPoints());if(x.f_setMinDeltaTime&&F>x.minDeltaTime){x.f_setMinDeltaTime(F)}v=g.getOptimalTimeInterval(I,x.f_maxPoints);M=x.cache[z];for(var C=z+1;C<H;C++){L=x.cache[C];J=x.getKey(L);B=x.getTimeMs(L);K=false;if((B-A)>v){A=B;if(M){w.Item.push(M);G[x.getKey(M)]=x.getTimeMs(M)}K=true}else{if(B-(G[J]||0)>E){K=true}}if(K){M=L;E=B-(G[J]||0)}}w.Item.push(x.cache[H])}else{for(var C=H-x.f_maxPoints;C<=H;C++){w.Item.push(x.cache[C])}}}else{v=0;for(var C=z;C<=H;C++){w.Item.push(x.cache[C])}if((x.minDeltaTime==0)&&x.r_overflowDp){x.r_overflowDp.value.set(false)}}}else{if(x.f_activeRangeCachedCompletely){w.Item.clear()}else{x.f_clearCollectionSuspended=true}}if(w.Item.length==0&&D==0){w.y_proxy_touch()}};this.setGetKeyFunction=function(z){x.getKey=z};this.setSetKeyFunction=function(z){x.setKey=z};this.handleRead=function(z){x.insert(z)};this.hanldeItem_DataColl=function(z){if(z!=null&&z.Item.length>0){this.insert(z.Item)}};this.f_TimeDependentDataCacheObject_trimCache=function(){var z;while(x.cache.length>s){z=x.getTimeMs(x.cache.shift())}return z};this.f_trimCache=function(){x.f_TimeDependentDataCacheObject_trimCache()};this.insert=function(D,J){if(D!=null){D=m.ensureArray(D);if(x.cache.length>s){this.f_trimCache()}var F,A,H;var E=new Object();for(var C=0;C<D.length;C++){F=D[C];if(F.UCPTvalue.length&&x.getValue&&x.getValue(F)==null){continue}var I=x.getKey(F);var B=m.getObjectViaKey(x.newDisplayList,I,x.getKey);if(!g.isSafe(B)){if(x.m_acceptUnknownDatasets==true){x.handleList(F)}else{continue}}A=x.getTimeMs(F);var G=true;if(J!=true||C==0){H=f(A)}if(!g.isSafe(H)){H=-1}while(++H<x.cache.length&&x.getTimeMs(x.cache[H])<=A){if(x.getTimeMs(x.cache[H])==A&&x.getKey(x.cache[H])==x.getKey(F)){if(x.f_replaceExisting){x.cache.splice(H,1)}else{G=false}break}}if(G){if(x.minDeltaTime){if(E[I]!=null&&A-E[I]<x.minDeltaTime){G=false}else{E[I]=A}}if(G){var z=x.p_getCacheItem(F);x.cache.splice(H,0,z);x.p_itemInserted(z);if(!i[I]||x.getTimeMs(i[I])<A){i[I]=F}}}H--}x.p_refreshRange()}};this.p_itemInserted=function(z){};this.setRange=function(z,A){if(z!=null&&A!=null){x.startTime=z;x.stopTime=A;x.r_activeRangeStart=Math.max(x.r_activeRangeStart,x.startTime);x.f_cacheCleanup();o()}};this.handleList=function(z){if(z!=null){m.insertIntoArray(x.everEncountered,z,x.getKey);m.insertIntoArray(x.newDisplayList,z,x.getKey)}x.p_getResponseSuccessful()};this.getKey=function(z){return z.UCPTname.get()};var t=function(){x.newDisplayList=new Array()};var o=function(){if(x.startTime!=null&&x.stopTime!=null){if(h!=null){h.min.setTime(x.startTime);h.max.setTime(x.stopTime)}else{x.r_activeRangeStop=x.stopTime}}};this.f_resetRange=function(){x.startTime=null;x.stopTime=null;if(h!=null){h.min.setTime();h.max.setTime()}};this.p_getCacheItem=function(z){return z};this.f_cacheCleanup=function(){for(var z=0;z<x.cache.length;z++){if(x.getTimeMs(x.cache[z])>=x.startTime){break}}if(z!=0){x.cache.splice(0,z-1)}x.p_cacheCleanupFinalize()};var f=function(E){if(!x.cache.length){return null}var D=0;var A=x.cache.length-1;var z;var C;var B;while(D<=A){z=Math.floor((D+A+0)/2);C=x.getTimeMs(x.cache[z]);if(C==E){while(C==E){z--;if(z<0){return null}C=x.getTimeMs(x.cache[z])}return z}if(E<C){A=z-1}else{D=z+1}}if(D==0){return null}else{if(A==(x.cache.length-1)){return x.cache.length-1}else{return Math.min(D,A)}}};var l=function(D){if(!x.cache.length){return null}var C=0;var A=x.cache.length-1;var z;var B;while(C<=A){z=Math.floor((C+A+0)/2);B=x.getTimeMs(x.cache[z]);if(B==D){while(B==D){z++;if(z>x.cache.length-1){return null}B=x.getTimeMs(x.cache[z])}return z}if(D<B){A=z-1}else{C=z+1}}if(C==0){return 0}else{if(A==(x.cache.length-1)){return null}else{return Math.max(C,A)}}};var x=this;var g=elon.UtilObject.getInstance();var k=elon.elon;var m=elon.ObjectArrayUtilities.getInstance();var u=d.sso;this.minDeltaTime=0;this.startTime=null;this.stopTime=null;this.callbackRegistrationFunctions=new Array();this.cache=new Array();this.r_randomSampleMode=d.randomSampleMode==null?true:d.randomSampleMode;this.f_activeRangeCachedCompletely=true;var q=false;var j=false;var e=0;var v=0;this.parentView=d.parentView;this.r_activeRangeStart=null;this.r_activeRangeStop=null;var b=d;var n=null;this.r_dead=false;var y=0;this.r_overflowDp;var s=1000;this.r_initialMaxPoints=80;this.f_maxPoints=this.r_initialMaxPoints;var a=null;var p=60;var i=new Object();var r=new Array();this.newDisplayList=new Array();this.everEncountered=new Array();this.m_timeNode=d.timeNode||"UCPTlastUpdate";if(d.getKeyFunc){this.getKey=d.getKeyFunc}this.m_acceptUnknownDatasets=true;var h,w;if(d.nameOfTimeRangeDp!=null){this.r_timeRangeDp=u.getItem({type:"DpTimeRange_Data",Item:d.nameOfTimeRangeDp});u.subscribe({type:"DpTimeRange_Data",Item:d.nameOfTimeRangeDp,callback:c});h=u.getItem({type:"DpTimeRange_Cfg",Item:d.nameOfTimeRangeDp});w=u.getItem({type:"DpTree_Data",Item:d.nameOfTimeRangeDp})}if(d.nameOfDataDp!=null){w=u.getItem({type:"DpTree_Data",Item:d.nameOfDataDp})}if(d.nameOfOverflowDp!=null){x.r_overflowDp=u.getItem({type:"BoolItem",Item:d.nameOfOverflowDp});x.r_overflowDp.value.set(false)}};Echelon.TimeDependentDataCacheObject.getInstance=function(){return new Echelon.TimeDependentDataCacheObject()};Echelon.Unit=function(a){var c=a;var d=null;var b=null;this.getId=function(){return c};this.getMin=function(){return d};this.getMax=function(){return b};this.updateUnitExtremes=function(f){f=Number(f);var e=true;if(d==null){d=b=f}else{if(d>f){d=f}else{if(b<f){b=f}}}};this.r_instanceCount=Echelon.Unit.instanceCounter++};Echelon.Unit.getInstance=function(a){return new Echelon.Unit(a)};Echelon.Unit.instanceCounter=0;Echelon.NvCacheObject=function(c){this.getUnit=function(m){var o=b.getKey(m);var p=i[o];if(p==null){var l="";var n=g[o];if(n){l=k[n]}else{l=m.r_proxy_type=="Dp_Cfg"?a.getUnitViaDpCfg(m):a.getUnitViaDpData(m)}if(l!=""){var q=d.getObjectViaKey(b.everEncountered,l,function(r){return a.getUnitViaDpCfg(r)});if(q){p=i[b.getKey(q)]}if(p==null){p=i[o]=Echelon.Unit.getInstance(l)}}else{p=i[o]=Echelon.Unit.getInstance("")}}return p};this.p_itemInserted=function(l){if(b.isDiscrete(l)==false){b.getUnit(l).updateUnitExtremes(b.getValue(l))}};this.isDiscrete=function(l){return !h[b.getKey(l)]};this.isScalar=function(l){return h[b.getKey(l)]};this.getValue=function(m){var l=g[b.getKey(m)];if(l){return a.getUCPTvalue(m,l,false)}return m.UCPTvalue[0].get()};this.handleConfig=function(o,l,p){if(o!=null){var m=b.getKey(o);var n=b.newDisplayList.length;d.insertIntoArray(b.everEncountered,o,b.getKey);d.insertIntoArray(b.newDisplayList,o,b.getKey);if(l){p=a.getNvtMember(p,l);h[m]=((p.float_&&p.float_.r_proxy_type)||(p.scalar_&&p.scalar_.r_proxy_type))?true:false;k[l]=p.UCPTunit.length>0?p.UCPTunit[0].get():""}else{h[m]=a.isScalar(d.getObjectViaKey(b.newDisplayList,m,b.getKey).UCPTbaseType.get())}g[m]=l;i[m]=null;b.getUnit(o)}};this.getLonFormat=function(l){return g[l]};this.handleAoDP_Config=function(l){if(l!=null){for(var m=0;m<l.length;m++){this.handleConfig(l[m])}}};this.getPresetIdx=function(l){var m=this.getPresets(l);if(!m){return null}var n=a.getUCPTvalueObj(l,"UCPTvalueDef");if(n){if(m[n.get()]!=null){return m[n.get()]}else{m[n.get()]=e[b.getKey(l)]++}}else{if(!m.UNDEFINED){m.UNDEFINED=e[b.getKey(l)]++}}return e[b.getKey(l)]-1};this.getPresetViaIndex=function(l,o){var m=this.getPresets(l);if(!m){return null}for(var n in m){if(m[n]==o){return n}}return"UNDEFINED"};this.getNumberOfPresets=function(l){return e[b.getKey(l)]};this.getNumberOfPresetsViaKey=function(l){return e[l]};this.getPresets=function(l){var m=d.getObjectViaKey(b.newDisplayList,b.getKey(l),b.getKey);var n=f[b.getKey(m)];if(n==null){var p=b.getKey(m);if((typeof m.ValueDef=="object")&&m.ValueDef.length){n=new Object();m.ValueDef.sort("UCPTindex");e[p]=0;for(var o=0;o<m.ValueDef.length;o++){var q=m.ValueDef[o].UCPTname.get();if(q!=null&&n[q]==null){n[q]=e[p]++}}f[p]=n}else{return null}}return n};var b=this;var a=elon.UtilObject.getInstance();var d=elon.ObjectArrayUtilities.getInstance();var g=new Object();var j=c.sso;var i=new Object();var f=new Object();var k=new Object();var e=new Object();var h=new Object()};Echelon.NvCacheObject.indexSort=function(b,a){if(b.UCPTindex<a.UCPTindex){return -1}if(b.UCPTindex>a.UCPTindex){return 1}return 0};elon.provide("Cache",document);