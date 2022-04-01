"use strict";(self["webpackChunkteste_frontend"]=self["webpackChunkteste_frontend"]||[]).push([[917],{8917:(e,t,s)=>{s.r(t),s.d(t,{default:()=>j});var a=s(9835),n=s(6970);const i={class:"wrapper flex"},c={class:"text-h3 flex flex-center"},l={class:"caption-text"},o={class:"q-gutter-xs flex flex-center"},r={class:"flex flex-center"},h=["src"],d={class:"flex flex-center"},p={class:"poke-height-weight"},g={class:"text-h4 stat-title"},u={class:"text-h6 stat"},w={class:"poke-height-weight"},m={class:"text-h4 stat-title"},k={class:"text-h6 stat"},f={class:"flex-center"},_={class:"poke-height-weight"},x={class:"text-h4 stat-title"},v={class:"row justify-center"},y={class:"stat-title"};function $(e,t,s,$,b,z){const q=(0,a.up)("q-badge"),C=(0,a.up)("q-card-section"),D=(0,a.up)("q-card");return(0,a.wg)(),(0,a.iD)("div",i,[b.isFetching?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(D,{key:0,class:"flex-center poke-card"},{default:(0,a.w5)((()=>[(0,a.Wm)(C,null,{default:(0,a.w5)((()=>[(0,a._)("div",c,[(0,a.Uk)((0,n.zw)(z.formatName(s.name))+" ",1),(0,a._)("span",l," #"+(0,n.zw)(this.padId(b.pokemon.id)),1)]),(0,a._)("div",o,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.pokemon.types,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:s},[(0,a.Wm)(q,{rounded:"",align:"middle",class:(0,n.C_)(["type-badge justify-center items-center",t.type.name]),label:e.$t(`types.${t.type.name}`)},null,8,["label","class"])])))),128))])])),_:1}),(0,a._)("div",r,[(0,a._)("img",{src:b.pokemon.sprites.other["official-artwork"].front_default,class:"poke-icon"},null,8,h)])])),_:1})),b.isFetching?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(D,{key:1,class:(0,n.C_)(["flex-center poke-stats-card",b.pokemon.types[0].type.name])},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{class:"stat-section"},{default:(0,a.w5)((()=>[(0,a._)("div",d,[(0,a._)("div",p,[(0,a._)("p",g,(0,n.zw)(e.$t("height")),1),(0,a._)("p",u,(0,n.zw)(e.$n(z.convertedHeight,"height")),1)]),(0,a._)("div",w,[(0,a._)("p",m,(0,n.zw)(e.$t("weight")),1),(0,a._)("p",k,(0,n.zw)(e.$n(z.convertedWeight,"weight")),1)])])])),_:1}),(0,a.Wm)(C,{class:"q-pa-md stat-section"},{default:(0,a.w5)((()=>[(0,a._)("div",f,[(0,a._)("div",_,[(0,a._)("p",x,(0,n.zw)(e.$t("baseStats")),1)]),(0,a._)("div",v,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(b.pokemon.stats,((t,s)=>((0,a.wg)(),(0,a.iD)("div",{key:s,class:"col-6 base-stat text-h6"},[(0,a._)("span",y,(0,n.zw)(e.$t(t.stat.name))+": ",1),(0,a.Uk)(" "+(0,n.zw)(t.base_stat),1)])))),128))])])])),_:1})])),_:1},8,["class"]))])}const b={props:["name"],data(){return{pokemon:{},isFetching:!0}},methods:{async getPokeData(){try{const e=await this.$api.get(`/pokemon/${this.name}`);this.pokemon=e.data,this.isFetching=!1}catch(e){console.log(e)}},padId(e){return String(e).padStart(3,0)},formatName(e){return e.charAt(0).toUpperCase()+e.slice(1)}},computed:{convertedHeight(){switch(this.$i18n.locale){case"pt-BR":return this.pokemon.height/10;case"en-US":return this.pokemon.height/3.048;default:return this.pokemon.height}},convertedWeight(){switch(this.$i18n.locale){case"pt-BR":return this.pokemon.weight/10;case"en-US":return this.pokemon.weight/4.536;default:return this.pokemon.height}}},async created(){await this.getPokeData()}};var z=s(1639),q=s(4458),C=s(3190),D=s(990),S=s(9984),W=s.n(S);const U=(0,z.Z)(b,[["render",$],["__scopeId","data-v-4d6784d6"]]),j=U;W()(b,"components",{QCard:q.Z,QCardSection:C.Z,QBadge:D.Z})}}]);