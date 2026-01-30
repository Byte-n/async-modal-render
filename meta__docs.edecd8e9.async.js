"use strict";(self.webpackChunkasync_modal_render=self.webpackChunkasync_modal_render||[]).push([[904],{75189:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var d=a(75271),o={}},56869:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var d=a(75271),o={}},24635:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var d=a(75271),o={}},37215:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var d=a(75271),o={}},38874:function(n,e,a){a.r(e),a.d(e,{demos:function(){return o}});var d=a(75271),o={}},536:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:`\u76F4\u63A5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u6307\u5B9A\u5BB9\u5668\u5143\u7D20\u4E0B\u3002
\u8FD9\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5DE5\u5177\u51FD\u6570\uFF0C\u4E0D\u9700\u8981\u4F9D\u8D56 Context \u6216 Hook\u3002
\u5E95\u5C42\u4F1A\u6839\u636E React \u7248\u672C\u81EA\u52A8\u9009\u62E9\u5408\u9002\u7684\u6E32\u67D3\u65B9\u5F0F\uFF1A`,paraId:0,tocIndex:2},{value:"React 19+\uFF1A\u901A\u8FC7 ",paraId:1,tocIndex:2},{value:"react-dom/client",paraId:1,tocIndex:2},{value:" \u7684 ",paraId:1,tocIndex:2},{value:"createRoot",paraId:1,tocIndex:2},{value:" \u6E32\u67D3\u3002",paraId:1,tocIndex:2},{value:"React 18\uFF1A\u4F18\u5148\u4F7F\u7528 ",paraId:1,tocIndex:2},{value:"createRoot",paraId:1,tocIndex:2},{value:"\uFF0C\u5E76\u590D\u7528\u6302\u8F7D\u5728\u5BB9\u5668\u4E0A\u7684 root\u3002",paraId:1,tocIndex:2},{value:"React 16/17\uFF1A\u56DE\u9000\u5230 ",paraId:1,tocIndex:2},{value:"ReactDOM.render",paraId:1,tocIndex:2},{value:" / ",paraId:1,tocIndex:2},{value:"unmountComponentAtNode",paraId:1,tocIndex:2},{value:"\u3002",paraId:1,tocIndex:2},{value:`function asyncModalRender<D extends AsyncModalProps, Quiet extends boolean>(
  Comp: React.ComponentType<D>,
  props?: ComputeAsyncModalProps<D>,
  container?: Element,
  options?: { quiet: Quiet }
): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never>
`,paraId:2,tocIndex:2},{value:"\u53C2\u6570\uFF1A",paraId:3,tocIndex:2},{value:"\u53C2\u6570",paraId:4,tocIndex:2},{value:"\u7C7B\u578B",paraId:4,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:4,tocIndex:2},{value:"\u8BF4\u660E",paraId:4,tocIndex:2},{value:"Comp",paraId:4,tocIndex:2},{value:"React.ComponentType<D>",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6",paraId:4,tocIndex:2},{value:"props",paraId:4,tocIndex:2},{value:"ComputeAsyncModalProps<D>",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"\u7EC4\u4EF6\u7684\u5C5E\u6027\uFF08",paraId:4,tocIndex:2},{value:"onOk",paraId:4,tocIndex:2},{value:" / ",paraId:4,tocIndex:2},{value:"onCancel",paraId:4,tocIndex:2},{value:" \u4F1A\u88AB\u81EA\u52A8\u6CE8\u5165\uFF0C\u53EF\u4E0D\u4F20\uFF09",paraId:4,tocIndex:2},{value:"container",paraId:4,tocIndex:2},{value:"Element",paraId:4,tocIndex:2},{value:"document.body",paraId:4,tocIndex:2},{value:"\u6302\u8F7D\u7684\u5BB9\u5668\u5143\u7D20\u3002\u5982\u679C\u4E0D\u4F20\uFF0C\u5219\u4F1A\u521B\u5EFA\u4E00\u4E2A div \u6302\u8F7D\u5230 body \u4E0B\uFF0C\u5E76\u5728\u5173\u95ED\u540E\u79FB\u9664\uFF08\u540C\u65F6\u9500\u6BC1 Root\uFF09\u3002",paraId:4,tocIndex:2},{value:"options",paraId:4,tocIndex:2},{value:"{ quiet: boolean }",paraId:4,tocIndex:2},{value:"-",paraId:4,tocIndex:2},{value:"\u914D\u7F6E\u9879\uFF0C\u652F\u6301\u9759\u9ED8\u6A21\u5F0F\uFF08\u53D6\u6D88\u65F6\u4E0D\u629B\u9519\uFF09",paraId:4,tocIndex:2},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:5,tocIndex:2},{value:"\u8FD4\u56DE\u4E00\u4E2A Promise\u3002",paraId:6,tocIndex:2},{value:"\u82E5 ",paraId:7,tocIndex:2},{value:"quiet",paraId:7,tocIndex:2},{value:" \u4E3A ",paraId:7,tocIndex:2},{value:"false",paraId:7,tocIndex:2},{value:"\uFF08\u9ED8\u8BA4\uFF09\uFF0ConOk \u65F6 resolve\uFF0ConCancel \u65F6 reject ",paraId:7,tocIndex:2},{value:"AsyncModalRenderCancelError",paraId:7,tocIndex:2},{value:"\u3002",paraId:7,tocIndex:2},{value:"\u82E5 ",paraId:7,tocIndex:2},{value:"quiet",paraId:7,tocIndex:2},{value:" \u4E3A ",paraId:7,tocIndex:2},{value:"true",paraId:7,tocIndex:2},{value:"\uFF0ConOk \u65F6 resolve\uFF0ConCancel \u65F6 resolve ",paraId:7,tocIndex:2},{value:"undefined",paraId:7,tocIndex:2},{value:"\u3002",paraId:7,tocIndex:2},{value:"\u5728\u7EC4\u4EF6\u5185\u4F7F\u7528\u7684 Hook\uFF0C\u8FD4\u56DE\u5F39\u7A97\u6E32\u67D3\u76F8\u5173\u7684\u65B9\u6CD5\u548C\u5143\u7D20\u3002",paraId:8,tocIndex:4},{value:`function useAsyncModalRender(): UseAsyncModalRenderReturn
`,paraId:9,tocIndex:4},{value:"\u8FD4\u56DE\u503C ",paraId:10,tocIndex:4},{value:"UseAsyncModalRenderReturn",paraId:10,tocIndex:4},{value:"\uFF1A",paraId:10,tocIndex:4},{value:"\u5C5E\u6027",paraId:11,tocIndex:4},{value:"\u7C7B\u578B",paraId:11,tocIndex:4},{value:"\u8BF4\u660E",paraId:11,tocIndex:4},{value:"render",paraId:11,tocIndex:4},{value:"AsyncModalRender",paraId:11,tocIndex:4},{value:"\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u7EC4\u4EF6",paraId:11,tocIndex:4},{value:"renderQuiet",paraId:11,tocIndex:4},{value:"AsyncModalRenderQuiet",paraId:11,tocIndex:4},{value:"\u5B89\u9759\u6A21\u5F0F\u6E32\u67D3\u51FD\u6570\uFF0C\u53D6\u6D88\u65F6\u4E0D\u629B\u51FA\u9519\u8BEF",paraId:11,tocIndex:4},{value:"renderPersistent",paraId:11,tocIndex:4},{value:"AsyncModalRenderPersistent",paraId:11,tocIndex:4},{value:"\u6301\u4E45\u5316\u6E32\u67D3\u51FD\u6570\uFF0C\u5FC5\u987B\u63D0\u4F9B persistent \u548C openField",paraId:11,tocIndex:4},{value:"holder",paraId:11,tocIndex:4},{value:"React.ReactElement",paraId:11,tocIndex:4},{value:"\u5F39\u7A97\u5BB9\u5668\u5143\u7D20\uFF0C\u9700\u8981\u653E\u7F6E\u5728\u7EC4\u4EF6\u7684 JSX \u4E2D",paraId:11,tocIndex:4},{value:"renderFactory",paraId:11,tocIndex:4},{value:"AsyncModalRenderFactory",paraId:11,tocIndex:4},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u521B\u5EFA\u9884\u914D\u7F6E\u7684 render \u51FD\u6570",paraId:11,tocIndex:4},{value:"renderQuietFactory",paraId:11,tocIndex:4},{value:"AsyncModalRenderQuietFactory",paraId:11,tocIndex:4},{value:"\u5B89\u9759\u6A21\u5F0F\u6E32\u67D3\u5DE5\u5382\u51FD\u6570",paraId:11,tocIndex:4},{value:"renderPersistentFactory",paraId:11,tocIndex:4},{value:"AsyncModalRenderPersistentFactory",paraId:11,tocIndex:4},{value:"\u6301\u4E45\u5316\u6E32\u67D3\u5DE5\u5382\u51FD\u6570",paraId:11,tocIndex:4},{value:"destroy",paraId:11,tocIndex:4},{value:"AsyncModalDestroy",paraId:11,tocIndex:4},{value:"\u9500\u6BC1\u6301\u4E45\u5316\u5F39\u7A97\u7684\u51FD\u6570",paraId:11,tocIndex:4},{value:"\u6838\u5FC3\u6E32\u67D3\u51FD\u6570\uFF0C\u7528\u4E8E\u6E32\u67D3\u5F39\u7A97\u5E76\u8FD4\u56DE\u4E00\u4E2A Promise\u3002",paraId:12,tocIndex:6},{value:`interface AsyncModalRender {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}
`,paraId:13,tocIndex:6},{value:"\u53C2\u6570\uFF1A",paraId:14,tocIndex:6},{value:"\u53C2\u6570",paraId:15,tocIndex:6},{value:"\u7C7B\u578B",paraId:15,tocIndex:6},{value:"\u8BF4\u660E",paraId:15,tocIndex:6},{value:"Comp",paraId:15,tocIndex:6},{value:"React.ComponentType<D>",paraId:15,tocIndex:6},{value:"\u9700\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6",paraId:15,tocIndex:6},{value:"props",paraId:15,tocIndex:6},{value:"ComputeAsyncModalProps<D>",paraId:15,tocIndex:6},{value:"\u7EC4\u4EF6\u7684\u5C5E\u6027",paraId:15,tocIndex:6},{value:"options",paraId:15,tocIndex:6},{value:"AsyncModalRenderOptions<D, Quiet>",paraId:15,tocIndex:6},{value:"\u6E32\u67D3\u914D\u7F6E\u9879\uFF08\u7528\u4E8E\u6301\u4E45\u5316\u3001Quiet \u6A21\u5F0F\u7B49\uFF09",paraId:15,tocIndex:6},{value:"\u8FD4\u56DE\u503C\uFF1A",paraId:16,tocIndex:6},{value:"\u8FD4\u56DE\u4E00\u4E2A Promise\uFF0CPromise \u5BF9\u8C61\u4E0A\u9644\u52A0\u4E86 ",paraId:17,tocIndex:6},{value:"destroyModal",paraId:17,tocIndex:6},{value:" \u65B9\u6CD5\uFF0C\u53EF\u7528\u4E8E\u624B\u52A8\u9500\u6BC1\u5F39\u7A97\u3002",paraId:17,tocIndex:6},{value:"\u6E32\u67D3\u914D\u7F6E\u9879\u3002",paraId:18,tocIndex:7},{value:`type AsyncModalRenderOptions<D, Quiet extends boolean> = {
  /**
   * \u72B6\u6001\u6301\u4E45\u5316\u7684 key\uFF08\u9700\u8981\u540C\u65F6\u4F20\u5165 openField \u624D\u751F\u6548\uFF09
   * \u82E5\u4F20\u5165\u6B64 key\uFF0C\u5F39\u7A97\u5173\u95ED\u540E\u4E0D\u4F1A\u9500\u6BC1\uFF0C\u800C\u662F\u9690\u85CF\uFF1B\u4E0B\u6B21\u4F7F\u7528\u76F8\u540C key \u6253\u5F00\u65F6\u4F1A\u6062\u590D\u72B6\u6001\u3002
   * \u82E5\u4E0D\u4F20\uFF0C\u5219\u5173\u95ED\u65F6\u76F4\u63A5\u9500\u6BC1\u5F39\u7A97\u3002
   */
  persistent?: string;
  /**
   * persistent \u65F6\u63A7\u5236\u5F39\u7A97\u5C55\u793A/\u9690\u85CF\u7684 prop key
   * \u5FC5\u987B\u662F\u7EC4\u4EF6 props \u4E2D\u7C7B\u578B\u4E3A boolean \u7684\u5B57\u6BB5\u540D
   * \u914D\u5408 persistent \u4F7F\u7528\uFF0C\u7528\u4E8E\u63A7\u5236\u6301\u4E45\u5316\u5F39\u7A97\u7684\u663E\u9690
   */
  openField?: ExtractBooleanKeys<D>;
  /**
   * \u662F\u5426\u5F00\u542F\u9759\u9ED8\u6A21\u5F0F
   * \u82E5\u4E3A true\uFF0C\u70B9\u51FB\u53D6\u6D88\u65F6\u4E0D\u4F1A\u629B\u51FA AsyncModalRenderCancelError\uFF0C\u800C\u662F resolve undefined
   * \u9ED8\u8BA4\u4E3A false
   */
  quiet?: Quiet;
}
`,paraId:19,tocIndex:7},{value:"\u6301\u4E45\u5316\u6E32\u67D3\u51FD\u6570\uFF0C\u5F3A\u5236\u8981\u6C42\u63D0\u4F9B ",paraId:20,tocIndex:8},{value:"persistent",paraId:20,tocIndex:8},{value:" \u548C ",paraId:20,tocIndex:8},{value:"openField",paraId:20,tocIndex:8},{value:" \u53C2\u6570\u3002",paraId:20,tocIndex:8},{value:`interface AsyncModalRenderPersistent {
  <D extends AsyncModalProps, const Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props: ComputeAsyncModalProps<D>,
    options: Omit<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>
      & Required<Pick<AsyncModalRenderOptions<D, Quiet>, 'openField' | 'persistent'>>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & { destroyModal: VoidFunction };
}
`,paraId:21,tocIndex:8},{value:"\u5B89\u9759\u6A21\u5F0F\u6E32\u67D3\u51FD\u6570\uFF0C\u9ED8\u8BA4 ",paraId:22,tocIndex:9},{value:"quiet",paraId:22,tocIndex:9},{value:" \u4E3A ",paraId:22,tocIndex:9},{value:"true",paraId:22,tocIndex:9},{value:"\u3002",paraId:22,tocIndex:9},{value:`interface AsyncModalRenderQuiet {
  <D extends AsyncModalProps>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: Omit<AsyncModalRenderOptions<D, true>, 'quiet'>,
  ): Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<true, R> : never> & { destroyModal: VoidFunction };
}
`,paraId:23,tocIndex:9},{value:"\u6E32\u67D3\u5DE5\u5382\u51FD\u6570\uFF0C\u7528\u4E8E\u9884\u914D\u7F6E\u7EC4\u4EF6\u3001\u5C5E\u6027\u53CA\u914D\u7F6E\u9879\uFF0C\u5E76\u8FD4\u56DE\u4E00\u4E2A\u53EF\u6267\u884C\u7684\u6E32\u67D3\u51FD\u6570\u3002",paraId:24,tocIndex:10},{value:`interface AsyncModalRenderFactory {
  <D extends AsyncModalProps, Quiet extends boolean>(
    Comp: React.ComponentType<D>,
    props?: ComputeAsyncModalProps<D>,
    options?: AsyncModalRenderOptions<D, Quiet>,
  ): RenderFactory<D, Quiet>;
}
`,paraId:25,tocIndex:10},{value:"RenderFactory \u8FD4\u56DE\u503C\uFF1A",paraId:26,tocIndex:10},{value:`type RenderFactory <D extends AsyncModalProps, Quiet extends boolean> =
  (() => Promise<D['onOk'] extends (v: infer R) => void ? ComputeQuiet<Quiet, R> : never> & {
    destroyModal: VoidFunction;
  }) & {
    destroyModal: VoidFunction;
  };
`,paraId:27,tocIndex:10},{value:"\u5DE5\u5382\u51FD\u6570\u8FD4\u56DE\u7684\u51FD\u6570\u672C\u8EAB\u4E5F\u5305\u542B ",paraId:28,tocIndex:10},{value:"destroyModal",paraId:28,tocIndex:10},{value:" \u65B9\u6CD5\uFF0C\u7528\u4E8E\u9500\u6BC1\u8BE5\u5DE5\u5382\u4EA7\u751F\u7684\u6240\u6709\u5F39\u7A97\uFF08\u5982\u679C\u9002\u7528\uFF09\u3002",paraId:28,tocIndex:10},{value:"\u9500\u6BC1\u6301\u4E45\u5316\u5F39\u7A97\u7684\u914D\u7F6E\u9879\u3002",paraId:29,tocIndex:12},{value:`interface AsyncModalDestroyOptions {
  /**
   * \u8981\u9500\u6BC1\u7684\u6301\u4E45\u5316\u5F39\u7A97\u7684 key
   * \u82E5\u4E0D\u4F20\uFF0C\u5219\u6839\u636E visibility \u7B5B\u9009\u6216\u9500\u6BC1\u6240\u6709
   */
  persistent?: string;
  /**
   * \u53EF\u89C1\u6027\u7B5B\u9009
   * - visible: \u4EC5\u9500\u6BC1\u5F53\u524D\u53EF\u89C1\u7684\u5F39\u7A97
   * - hidden: \u4EC5\u9500\u6BC1\u5F53\u524D\u9690\u85CF\u7684\u5F39\u7A97
   * \u82E5\u4E0D\u4F20\uFF0C\u5219\u4E0D\u7B5B\u9009\u53EF\u89C1\u6027
   */
  visibility?: 'visible' | 'hidden';
}
`,paraId:30,tocIndex:12},{value:"\u63D0\u4F9B ",paraId:31,tocIndex:14},{value:"asyncModalRender",paraId:31,tocIndex:14},{value:" \u4E0A\u4E0B\u6587\u7684 Provider \u7EC4\u4EF6\u3002",paraId:31,tocIndex:14},{value:`function AsyncModalRenderProvider({ children }: { children: React.ReactNode }): React.ReactElement
`,paraId:32,tocIndex:14},{value:"\u83B7\u53D6 ",paraId:33,tocIndex:15},{value:"AsyncModalContext",paraId:33,tocIndex:15},{value:" \u4E0A\u4E0B\u6587\u7684 Hook\uFF0C\u5FC5\u987B\u5728 ",paraId:33,tocIndex:15},{value:"AsyncModalRenderProvider",paraId:33,tocIndex:15},{value:" \u5185\u90E8\u4F7F\u7528\u3002",paraId:33,tocIndex:15},{value:`function useAsyncModalRenderContext(): AsyncModalContext
`,paraId:34,tocIndex:15},{value:"\u8FD4\u56DE\u503C ",paraId:35,tocIndex:15},{value:"AsyncModalContext",paraId:35,tocIndex:15},{value:"\uFF1A",paraId:35,tocIndex:15},{value:"\u5305\u542B ",paraId:36,tocIndex:15},{value:"render",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"renderQuiet",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"renderPersistent",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"renderFactory",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"renderQuietFactory",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"renderPersistentFactory",paraId:36,tocIndex:15},{value:", ",paraId:36,tocIndex:15},{value:"destroy",paraId:36,tocIndex:15},{value:` \u65B9\u6CD5\u3002
\u4E0D\u5305\u542B `,paraId:36,tocIndex:15},{value:"holder",paraId:36,tocIndex:15},{value:"\u3002",paraId:36,tocIndex:15},{value:"Context \u4E2D\u7684 ",paraId:37,tocIndex:15},{value:"render",paraId:37,tocIndex:15},{value:" \u65B9\u6CD5\u652F\u6301 ",paraId:37,tocIndex:15},{value:"options.destroyStrategy",paraId:37,tocIndex:15},{value:"\uFF1A",paraId:37,tocIndex:15},{value:`type ContextAsyncModalRenderOptions<D, Quiet extends boolean> = AsyncModalRenderOptions<D, Quiet> & {
  destroyStrategy?: 'hook' | 'context';
};
`,paraId:38,tocIndex:15},{value:`\u5F39\u7A97\u7EC4\u4EF6\u9700\u8981\u7EE7\u627F\u7684\u57FA\u7840\u5C5E\u6027\u63A5\u53E3\u3002
\u6240\u6709\u901A\u8FC7 async-modal-render \u8C03\u7528\u7684\u7EC4\u4EF6\u90FD\u5E94\u8BE5\u7B26\u5408\u6B64\u63A5\u53E3\uFF08\u6216\u901A\u8FC7 mapper \u9002\u914D\uFF09\u3002`,paraId:39,tocIndex:16},{value:`interface AsyncModalProps {
  onOk?: (...args: any[]) => void;
  onCancel?: (error?: any) => void;
}
`,paraId:40,tocIndex:16},{value:"\u8BA1\u7B97\u540E\u7684\u7EC4\u4EF6\u5C5E\u6027\u7C7B\u578B\uFF0C\u4F7F ",paraId:41,tocIndex:17},{value:"onOk",paraId:41,tocIndex:17},{value:" \u548C ",paraId:41,tocIndex:17},{value:"onCancel",paraId:41,tocIndex:17},{value:" \u53D8\u4E3A\u53EF\u9009\u3002",paraId:41,tocIndex:17},{value:`export type ComputeAsyncModalProps<D extends AsyncModalProps> =
  & Pick<D, Exclude<keyof D, 'onOk' |'onCancel'>>
  & Partial<Pick<D, 'onOk' | 'onCancel'>>
`,paraId:42,tocIndex:17},{value:"\u7528\u6237\u53D6\u6D88\u64CD\u4F5C\u65F6\u629B\u51FA\u7684\u9519\u8BEF\u7C7B\uFF08\u4EC5\u5728\u975E quiet \u6A21\u5F0F\u4E0B\u629B\u51FA\uFF09\u3002",paraId:43,tocIndex:19},{value:`class AsyncModalRenderCancelError extends Error {
  constructor();
}
`,paraId:44,tocIndex:19},{value:"\u5F53\u5C1D\u8BD5\u4F7F\u7528\u76F8\u540C\u7684 persistent key \u6E32\u67D3\u4E0D\u540C\u7EC4\u4EF6\u65F6\u629B\u51FA\u7684\u9519\u8BEF\u3002",paraId:45,tocIndex:20},{value:`export class PersistentComponentConflictError extends Error {
  constructor(key: string);
}
`,paraId:46,tocIndex:20},{value:"\u5C5E\u6027\u6620\u5C04\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u9002\u914D\u5177\u6709\u4E0D\u540C ",paraId:47,tocIndex:21},{value:"onOk",paraId:47,tocIndex:21},{value:"/",paraId:47,tocIndex:21},{value:"onCancel",paraId:47,tocIndex:21},{value:" \u547D\u540D\u89C4\u8303\u7684\u7EC4\u4EF6\u3002",paraId:47,tocIndex:21},{value:"\u6B64 HOC \u5185\u90E8\u5B9E\u73B0\u4E86\u7F13\u5B58\u673A\u5236\uFF1A\u5BF9\u4E8E\u540C\u4E00\u4E2A\u7EC4\u4EF6\u548C\u76F8\u540C\u7684\u6620\u5C04 key\uFF0C\u4F1A\u8FD4\u56DE\u540C\u4E00\u4E2A\u5305\u88C5\u7EC4\u4EF6\u5F15\u7528\uFF0C\u8FD9\u6709\u52A9\u4E8E\u907F\u514D\u4E0D\u5FC5\u8981\u7684 React \u6E32\u67D3\u66F4\u65B0\u3002",paraId:48,tocIndex:21},{value:`function withAsyncModalPropsMapper<
  A extends object,
  OnOk extends keyof A,
  OnCancel extends keyof A
>(
  Comp: ComponentType<A>,
  keys: [OnOk, OnCancel],
): ComponentType<
  Pick<A, Exclude<keyof A, OnOk | OnCancel>> & { onCancel: A[OnCancel]; onOk: A[OnOk] }
>
`,paraId:49,tocIndex:21}]},58088:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:"2026-01-30",paraId:0,tocIndex:1},{value:`\u4FEE\u590D React 19 \u517C\u5BB9\u6027\u95EE\u9898\uFF1A
`,paraId:1,tocIndex:2},{value:"\u5728 ",paraId:2,tocIndex:2},{value:"staticRender",paraId:2,tocIndex:2},{value:" \u4E2D\u65B0\u589E\u5BF9 ",paraId:2,tocIndex:2},{value:"react-dom/client",paraId:2,tocIndex:2},{value:" \u7684\u52A8\u6001\u6309\u9700\u5BFC\u5165\uFF08",paraId:2,tocIndex:2},{value:"await import('react-dom/client')",paraId:2,tocIndex:2},{value:"\uFF09\uFF0C\u5728\u68C0\u6D4B\u5230 React 19+ \u73AF\u5883\u65F6\u4F18\u5148\u4F7F\u7528 ",paraId:2,tocIndex:2},{value:"createRoot",paraId:2,tocIndex:2},{value:"\uFF0C\u4ECE\u800C\u5728 React 19 \u4E2D\u4E5F\u53EF\u4EE5\u6B63\u5E38\u4F7F\u7528\u672C\u5E93\u3002",paraId:2,tocIndex:2},{value:"\u5B8C\u6210\u6D4B\u8BD5\u7528\u4F8B\u5728",paraId:3,tocIndex:3},{value:"\u8BED\u53E5\u3001\u5206\u652F\u8DEF\u5F84\u3001\u6E90\u7801\u884C",paraId:3,tocIndex:3},{value:"\u7EF4\u5EA6\u7684 100% \u8986\u76D6\uFF08\u6838\u5FC3\u5B9E\u73B0\u4EE3\u7801 ",paraId:3,tocIndex:3},{value:"src/**/*.{ts,tsx}",paraId:3,tocIndex:3},{value:"\uFF09\uFF0C\u663E\u8457\u63D0\u5347\u5E93\u7684\u6574\u4F53\u7A33\u5B9A\u6027\u4E0E\u56DE\u5F52\u4FE1\u5FC3\u3002",paraId:3,tocIndex:3},{value:"\u8865\u5145 ",paraId:3,tocIndex:3},{value:"useAsyncModalRender",paraId:3,tocIndex:3},{value:` \u5728\u6301\u4E45\u5316\u573A\u666F\u4E0B\u7684\u591A\u79CD\u8FB9\u754C\u6D4B\u8BD5\uFF0C\u5305\u62EC\uFF1A
`,paraId:3,tocIndex:3},{value:"persistent",paraId:4,tocIndex:3},{value:" Key \u652F\u6301 ",paraId:4,tocIndex:3},{value:"number",paraId:4,tocIndex:3},{value:" / ",paraId:4,tocIndex:3},{value:"symbol",paraId:4,tocIndex:3},{value:" \u7B49\u591A\u79CD\u7C7B\u578B\uFF1B",paraId:4,tocIndex:3},{value:"\u6301\u4E45\u5316\u5173\u95ED\u540E\uFF0C\u5386\u53F2 ",paraId:4,tocIndex:3},{value:"destroyModal",paraId:4,tocIndex:3},{value:" \u4E0D\u4F1A\u8BEF\u5220\u5DF2\u7ECF patch \u7684\u5143\u7D20\uFF0C\u9700\u901A\u8FC7 ",paraId:4,tocIndex:3},{value:"destroy",paraId:4,tocIndex:3},{value:" \u663E\u5F0F\u6E05\u7406\uFF1B",paraId:4,tocIndex:3},{value:"\u5728\u4E0D\u4F20 ",paraId:4,tocIndex:3},{value:"props",paraId:4,tocIndex:3},{value:" \u7684\u60C5\u51B5\u4E0B\uFF0C",paraId:4,tocIndex:3},{value:"render",paraId:4,tocIndex:3},{value:" \u80FD\u81EA\u52A8\u4F7F\u7528\u7A7A\u5BF9\u8C61\u5E76\u6B63\u5E38 resolve\u3002",paraId:4,tocIndex:3},{value:"\u8865\u5145 ",paraId:3,tocIndex:3},{value:"withAsyncModalPropsMapper",paraId:3,tocIndex:3},{value:` \u7684\u884C\u4E3A\u6D4B\u8BD5\uFF0C\u786E\u4FDD\uFF1A
`,paraId:3,tocIndex:3},{value:"\u4ECE ",paraId:5,tocIndex:3},{value:"../src",paraId:5,tocIndex:3},{value:" \u800C\u975E\u6253\u5305\u4EA7\u7269 ",paraId:5,tocIndex:3},{value:"../dist",paraId:5,tocIndex:3},{value:" \u8FDB\u884C\u5BFC\u5165\uFF0C\u4FDD\u8BC1\u5355\u6D4B\u5BF9\u6E90\u7801\u7684\u76F4\u63A5\u7EA6\u675F\uFF1B",paraId:5,tocIndex:3},{value:"Mapped \u7EC4\u4EF6\u4E0D\u4F1A\u7EE7\u627F\u539F\u7EC4\u4EF6\u7684 ",paraId:5,tocIndex:3},{value:"name",paraId:5,tocIndex:3},{value:" / ",paraId:5,tocIndex:3},{value:"displayName",paraId:5,tocIndex:3},{value:"\uFF0C\u907F\u514D\u5728\u8C03\u8BD5\u4E0E DevTools \u4E2D\u9020\u6210\u7EC4\u4EF6\u6DF7\u6DC6\u3002",paraId:5,tocIndex:3},{value:"\u4E3A ",paraId:3,tocIndex:3},{value:"asyncModalRender",paraId:3,tocIndex:3},{value:"\u3001",paraId:3,tocIndex:3},{value:"AsyncModalRenderContext",paraId:3,tocIndex:3},{value:" \u7B49\u6838\u5FC3 API \u589E\u52A0\u4E86\u66F4\u591A\u6D4F\u89C8\u5668\u7AEF\u4EA4\u4E92\u6D4B\u8BD5\uFF0C\u9A8C\u8BC1\u53D6\u6D88\u884C\u4E3A\u3001\u9500\u6BC1\u7B56\u7565\u548C\u5DE5\u5382\u51FD\u6570\u5728\u590D\u6742\u573A\u666F\u4E0B\u7684\u8868\u73B0\u3002",paraId:3,tocIndex:3},{value:"2026-01-29",paraId:6,tocIndex:4},{value:"\u6301\u4E45\u5316\u5F39\u7A97 (Persistent Modals)",paraId:7,tocIndex:5},{value:": \u65B0\u589E ",paraId:7,tocIndex:5},{value:"renderPersistent",paraId:7,tocIndex:5},{value:" \u548C ",paraId:7,tocIndex:5},{value:"renderPersistentFactory",paraId:7,tocIndex:5},{value:" API\u3002\u652F\u6301\u5F39\u7A97\u5728\u5173\u95ED\u65F6\u4EC5\u9690\u85CF\u800C\u4E0D\u9500\u6BC1\uFF0C\u4ECE\u800C\u4FDD\u7559\u5185\u90E8\u72B6\u6001\uFF08\u5982\u8868\u5355\u8F93\u5165\u3001Tab \u9009\u4E2D\u6001\u7B49\uFF09\u3002",paraId:7,tocIndex:5},{value:"\u9759\u9ED8\u6A21\u5F0F (Quiet Mode)",paraId:7,tocIndex:5},{value:": \u65B0\u589E ",paraId:7,tocIndex:5},{value:"renderQuiet",paraId:7,tocIndex:5},{value:" \u548C ",paraId:7,tocIndex:5},{value:"renderQuietFactory",paraId:7,tocIndex:5},{value:" API\u3002\u5F53\u7528\u6237\u53D6\u6D88/\u5173\u95ED\u5F39\u7A97\u65F6\uFF0C\u4E0D\u518D\u629B\u51FA ",paraId:7,tocIndex:5},{value:"AsyncModalRenderCancelError",paraId:7,tocIndex:5},{value:"\uFF0C\u800C\u662F resolve ",paraId:7,tocIndex:5},{value:"undefined",paraId:7,tocIndex:5},{value:"\uFF0C\u7B80\u5316\u4E86\u7B80\u5355\u7684\u786E\u8BA4/\u53D6\u6D88\u6D41\u7A0B\u5904\u7406\u3002",paraId:7,tocIndex:5},{value:"Context \u9500\u6BC1\u7B56\u7565",paraId:7,tocIndex:5},{value:": ",paraId:7,tocIndex:5},{value:"useAsyncModalRenderContext",paraId:7,tocIndex:5},{value:" \u7684\u6E32\u67D3\u9009\u9879\u65B0\u589E ",paraId:7,tocIndex:5},{value:"destroyStrategy",paraId:7,tocIndex:5},{value:` \u5C5E\u6027\u3002
`,paraId:7,tocIndex:5},{value:"hook",paraId:8,tocIndex:5},{value:": \u8DDF\u968F\u5F53\u524D\u7EC4\u4EF6\u5378\u8F7D\u800C\u81EA\u52A8\u9500\u6BC1\u5F39\u7A97\uFF08\u9632\u6B62\u5185\u5B58\u6CC4\u6F0F\uFF09\u3002",paraId:8,tocIndex:5},{value:"context",paraId:8,tocIndex:5},{value:" (\u9ED8\u8BA4): \u5F39\u7A97\u751F\u547D\u5468\u671F\u4E0E ",paraId:8,tocIndex:5},{value:"AsyncModalRenderProvider",paraId:8,tocIndex:5},{value:" \u7ED1\u5B9A\uFF0C\u4E0D\u968F\u8C03\u7528\u7EC4\u4EF6\u5378\u8F7D\u800C\u9500\u6BC1\u3002",paraId:8,tocIndex:5},{value:"\u6301\u4E45\u5316\u51B2\u7A81\u68C0\u6D4B",paraId:9,tocIndex:6},{value:": \u5728 ",paraId:9,tocIndex:6},{value:"useAsyncModalRender",paraId:9,tocIndex:6},{value:" \u4E2D\u589E\u52A0\u4E86\u5B89\u5168\u68C0\u67E5\uFF0C\u5F53\u5C1D\u8BD5\u4F7F\u7528\u76F8\u540C\u7684 ",paraId:9,tocIndex:6},{value:"persistent",paraId:9,tocIndex:6},{value:" Key \u6E32\u67D3\u4E0D\u540C\u7EC4\u4EF6\u65F6\uFF0C\u4F1A\u629B\u51FA ",paraId:9,tocIndex:6},{value:"PersistentComponentConflictError",paraId:9,tocIndex:6},{value:"\uFF0C\u9632\u6B62\u56E0\u7EC4\u4EF6\u5F15\u7528\u53D8\u5316\u5BFC\u81F4\u7684 React \u72B6\u6001\u610F\u5916\u91CD\u7F6E\u3002",paraId:9,tocIndex:6},{value:"Props \u6620\u5C04\u5668\u7F13\u5B58",paraId:9,tocIndex:6},{value:": \u4F18\u5316 ",paraId:9,tocIndex:6},{value:"withAsyncModalPropsMapper",paraId:9,tocIndex:6},{value:" \u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u4E86\u57FA\u4E8E\u7EC4\u4EF6\u5F15\u7528\u548C\u6620\u5C04 Key \u7684\u7F13\u5B58\u673A\u5236\uFF0C\u907F\u514D\u751F\u6210\u91CD\u590D\u7684\u5305\u88C5\u7EC4\u4EF6\uFF0C\u51CF\u5C11\u4E0D\u5FC5\u8981\u7684 React \u6E32\u67D3\u3002",paraId:9,tocIndex:6},{value:"2026-01-28",paraId:10,tocIndex:7},{value:"\u6838\u5FC3\u4FEE\u590D",paraId:11,tocIndex:8},{value:"\uFF1A\u4FEE\u590D\u6301\u4E45\u5316\u5F39\u7A97\u72B6\u6001\u4E22\u5931\u7684\u95EE\u9898\u3002\u901A\u8FC7\u91CD\u6784 ",paraId:11,tocIndex:8},{value:"ElementsHolder",paraId:11,tocIndex:8},{value:" \u4E2D\u7684 ",paraId:11,tocIndex:8},{value:"key",paraId:11,tocIndex:8},{value:" \u751F\u6210\u7B56\u7565\uFF0C\u4F7F\u7528\u968F\u673A\u552F\u4E00\u6807\u8BC6\u7B26\u66FF\u6362\u539F\u6709\u7684\u9012\u589E ID\uFF0C\u5F7B\u5E95\u89E3\u51B3\u4E86\u5728\u6301\u4E45\u5316\u6E32\u67D3\u573A\u666F\u4E0B\u56E0 Key \u51B2\u7A81\u5BFC\u81F4\u7684\u7EC4\u4EF6\u72B6\u6001\u91CD\u7F6E\u6216\u4E22\u5931 bug\u3002",paraId:11,tocIndex:8},{value:"\u4F18\u5316 ",paraId:12,tocIndex:9},{value:"asyncModalRenderImp",paraId:12,tocIndex:9},{value:" \u5B9E\u73B0\uFF0C\u79FB\u9664\u5197\u4F59\u7684 Key \u5C5E\u6027\u4F20\u9012\uFF0C\u51CF\u5C11\u5BF9\u4E1A\u52A1\u7EC4\u4EF6\u7684\u6F5C\u5728\u526F\u4F5C\u7528\u3002",paraId:12,tocIndex:9},{value:"\u589E\u5F3A React \u7248\u672C\u517C\u5BB9\u6027\uFF0C\u6539\u8FDB ",paraId:12,tocIndex:9},{value:"staticRender",paraId:12,tocIndex:9},{value:" \u5DE5\u5177\u51FD\u6570\u4EE5\u66F4\u597D\u5730\u652F\u6301 React 19+ \u73AF\u5883\u3002",paraId:12,tocIndex:9},{value:"\u5B8C\u5584\u6D4B\u8BD5\u8986\u76D6\u7387\uFF0C\u65B0\u589E\u591A\u5F39\u7A97\u5E76\u53D1\u6E32\u67D3\u65F6\u7684 Key \u552F\u4E00\u6027\u6821\u9A8C\u6D4B\u8BD5\u3002",paraId:12,tocIndex:9},{value:"\u5DE5\u7A0B\u5316\u5347\u7EA7\uFF1A\u7EDF\u4E00\u914D\u7F6E\u6587\u4EF6\u683C\u5F0F\u4E3A ",paraId:12,tocIndex:9},{value:".cjs",paraId:12,tocIndex:9},{value:"\uFF0C\u4F18\u5316\u6784\u5EFA\u914D\u7F6E\u3002",paraId:12,tocIndex:9},{value:"\u4F18\u5316\u4F7F\u7528\u624B\u518C\u793A\u4F8B",paraId:12,tocIndex:9},{value:"2026-01-27",paraId:13,tocIndex:10},{value:"\u4FEE\u590D ",paraId:14,tocIndex:11},{value:"asyncModalRenderImp",paraId:14,tocIndex:11},{value:" \u4E2D\u7EC4\u4EF6 ",paraId:14,tocIndex:11},{value:"key",paraId:14,tocIndex:11},{value:" \u51B2\u7A81\u7684\u6F5C\u5728 Bug\uFF0C\u786E\u4FDD\u6BCF\u4E2A\u5F39\u7A97\u5B9E\u4F8B\u62E5\u6709\u552F\u4E00\u7684 React Key",paraId:14,tocIndex:11},{value:"\u6DF1\u5EA6\u4F18\u5316 ",paraId:15,tocIndex:12},{value:"VS",paraId:15,tocIndex:12},{value:" \u5BF9\u6BD4\u6587\u6863\uFF0C\u63D0\u4F9B\u66F4\u7CBE\u786E\u7684\u7ADE\u54C1\u5206\u6790\uFF08\u5BF9\u6BD4 NiceModal\uFF09\u53CA\u66F4\u4E30\u5BCC\u7684\u4EE3\u7801\u793A\u4F8B",paraId:15,tocIndex:12},{value:"\u5B8C\u5584 ",paraId:15,tocIndex:12},{value:"renderFactory",paraId:15,tocIndex:12},{value:" \u548C ",paraId:15,tocIndex:12},{value:"async/await",paraId:15,tocIndex:12},{value:" \u8C03\u7528\u7684\u6700\u4F73\u5B9E\u8DF5\u8BF4\u660E",paraId:15,tocIndex:12},{value:"2026-01-27",paraId:16,tocIndex:13},{value:"\u652F\u6301\u5F39\u7A97\u6301\u4E45\u5316\u6E32\u67D3\uFF08Persistence\uFF09\uFF0C\u901A\u8FC7 ",paraId:17,tocIndex:14},{value:"persistent",paraId:17,tocIndex:14},{value:" \u548C ",paraId:17,tocIndex:14},{value:"openField",paraId:17,tocIndex:14},{value:" \u914D\u7F6E\u5B9E\u73B0\uFF0C\u63D0\u5347\u590D\u6742\u4EA4\u4E92\u573A\u666F\u4E0B\u7684\u6027\u80FD",paraId:17,tocIndex:14},{value:"\u65B0\u589E ",paraId:17,tocIndex:14},{value:"destroy",paraId:17,tocIndex:14},{value:" API\uFF0C\u652F\u6301\u624B\u52A8\u9500\u6BC1\u6307\u5B9A\u7684\u6216\u5168\u90E8\u6301\u4E45\u5316\u6E32\u67D3\u7684\u5F39\u7A97",paraId:17,tocIndex:14},{value:"\u5B8C\u5584 ",paraId:18,tocIndex:15},{value:"AsyncModalRenderOptions",paraId:18,tocIndex:15},{value:" \u548C ",paraId:18,tocIndex:15},{value:"AsyncModalDestroyOptions",paraId:18,tocIndex:15},{value:" \u7C7B\u578B\u5B9A\u4E49",paraId:18,tocIndex:15},{value:"\u589E\u5F3A ",paraId:18,tocIndex:15},{value:"AsyncModalContext",paraId:18,tocIndex:15},{value:" \u7C7B\u578B\uFF0C\u5305\u542B ",paraId:18,tocIndex:15},{value:"destroy",paraId:18,tocIndex:15},{value:" \u65B9\u6CD5\uFF0C\u786E\u4FDD\u4E0A\u4E0B\u6587\u8C03\u7528\u7684\u4E00\u81F4\u6027",paraId:18,tocIndex:15},{value:"\u65B0\u589E ",paraId:18,tocIndex:15},{value:"ExtractBooleanKeys",paraId:18,tocIndex:15},{value:" \u5DE5\u5177\u7C7B\u578B\uFF0C\u7528\u4E8E\u81EA\u52A8\u63A8\u5BFC\u7EC4\u4EF6\u4E2D\u53EF\u7528\u4E8E\u63A7\u5236\u663E\u9690\u7684\u5C5E\u6027\u540D",paraId:18,tocIndex:15},{value:"\u65B0\u589E\u6301\u4E45\u5316\u6E32\u67D3\u7684\u8BE6\u7EC6 API \u6587\u6863\u53CA\u4F7F\u7528\u793A\u4F8B",paraId:19,tocIndex:16},{value:"\u4E3A\u6301\u4E45\u5316\uFF08Persistence\uFF09\u548C\u9500\u6BC1\uFF08Destroy\uFF09\u529F\u80FD\u6DFB\u52A0\u4E86\u5B8C\u6574\u7684\u81EA\u52A8\u5316\u6D4B\u8BD5\u7528\u4F8B\uFF0C\u786E\u4FDD\u529F\u80FD\u7A33\u5B9A\u6027",paraId:19,tocIndex:16},{value:"2026-01-23",paraId:20,tocIndex:17},{value:"\u4FEE\u590D ",paraId:21,tocIndex:18},{value:"dumijs2",paraId:21,tocIndex:18},{value:" React \u7248\u672C\u4E0E\u9879\u76EE\u5F00\u53D1\u73AF\u5883 React \u7248\u672C\u7C7B\u578B\u51B2\u7A81\u5BFC\u81F4\u7684\u6587\u6863\u6784\u5EFA\u5931\u8D25\u95EE\u9898",paraId:21,tocIndex:18},{value:"\u5C06\u9879\u76EE React \u4F9D\u8D56\u7248\u672C\u8C03\u6574\u4E3A ",paraId:21,tocIndex:18},{value:"18.2.17",paraId:21,tocIndex:18},{value:" \u4EE5\u786E\u4FDD\u66F4\u597D\u7684\u517C\u5BB9\u6027",paraId:21,tocIndex:18},{value:"\u4F18\u5316 ",paraId:21,tocIndex:18},{value:"staticRender",paraId:21,tocIndex:18},{value:" \u5DE5\u5177\u51FD\u6570\uFF0C\u63D0\u5347\u5728 React 18 \u73AF\u5883\u4E0B\u7684\u7A33\u5B9A\u6027",paraId:21,tocIndex:18},{value:"\u4F18\u5316 ",paraId:22,tocIndex:19},{value:"AsyncModalRenderFactory",paraId:22,tocIndex:19},{value:" \u7684\u7C7B\u578B\u5B9A\u4E49\uFF0C\u901A\u8FC7\u6CDB\u578B\u76F4\u63A5\u63A8\u5BFC\uFF0C\u63D0\u5347\u5728\u67D0\u4E9B\u590D\u6742\u573A\u666F\u4E0B\u7684\u7C7B\u578B\u63A8\u65AD\u51C6\u786E\u5EA6",paraId:22,tocIndex:19},{value:"2026-01-23",paraId:23,tocIndex:20},{value:"\u4E3A\u6240\u6709\u6838\u5FC3 API\uFF08",paraId:24,tocIndex:21},{value:"asyncModalRender",paraId:24,tocIndex:21},{value:"\u3001",paraId:24,tocIndex:21},{value:"useAsyncModalRender",paraId:24,tocIndex:21},{value:"\u3001",paraId:24,tocIndex:21},{value:"AsyncModalRenderContext",paraId:24,tocIndex:21},{value:"\u3001",paraId:24,tocIndex:21},{value:"withAsyncModalPropsMapper",paraId:24,tocIndex:21},{value:"\uFF09\u6DFB\u52A0\u4E86\u5B8C\u6574\u7684\u81EA\u52A8\u5316\u6D4B\u8BD5\u7528\u4F8B",paraId:24,tocIndex:21},{value:"\u4F7F\u7528 Vitest \u6D4F\u89C8\u5668\u6A21\u5F0F\u8FDB\u884C\u771F\u5B9E\u73AF\u5883\u6D4B\u8BD5\uFF0C\u786E\u4FDD\u7EC4\u4EF6\u6E32\u67D3\u4E0E\u4EA4\u4E92\u903B\u8F91\u6B63\u786E",paraId:24,tocIndex:21},{value:"\u8986\u76D6\u4E86\u6210\u529F\u3001\u53D6\u6D88\u3001\u9519\u8BEF\u8FB9\u754C\u7B49\u591A\u79CD\u4E1A\u52A1\u573A\u666F",paraId:24,tocIndex:21},{value:"\u4FEE\u590D\u4E86 ",paraId:25,tocIndex:22},{value:"AsyncModalRenderContext",paraId:25,tocIndex:22},{value:" \u5728 Provider \u5916\u90E8\u8C03\u7528\u65F6\u7684\u9519\u8BEF\u8FB9\u754C\u5904\u7406\u903B\u8F91",paraId:25,tocIndex:22},{value:"\u4F18\u5316\u4E86\u6D4B\u8BD5\u73AF\u5883\u4E0B\u7684 React \u6839\u8282\u70B9\u6302\u8F7D\u4E0E\u5378\u8F7D\u903B\u8F91",paraId:25,tocIndex:22},{value:"2026-01-23",paraId:26,tocIndex:23},{value:"\u65B0\u589E ",paraId:27,tocIndex:24},{value:"withAsyncModalPropsMapper",paraId:27,tocIndex:24},{value:" \u9AD8\u9636\u51FD\u6570\uFF0C\u652F\u6301\u5C06\u4E1A\u52A1\u7EC4\u4EF6\u7684 props \u6620\u5C04\u4E3A\u6807\u51C6\u7684 AsyncModalProps",paraId:27,tocIndex:24},{value:"\u65B0\u589E ",paraId:27,tocIndex:24},{value:"types.ts",paraId:27,tocIndex:24},{value:" \u7EDF\u4E00\u7BA1\u7406\u7C7B\u578B\u5B9A\u4E49\uFF0C\u63D0\u4F9B\u66F4\u597D\u7684\u7C7B\u578B\u63A8\u5BFC\u652F\u6301",paraId:27,tocIndex:24},{value:"\u5BFC\u51FA ",paraId:28,tocIndex:25},{value:"ComputeAsyncModalProps",paraId:28,tocIndex:25},{value:" \u7C7B\u578B\uFF0C\u7B80\u5316\u5F02\u6B65\u5F39\u7A97\u7EC4\u4EF6\u7684\u7C7B\u578B\u5B9A\u4E49",paraId:28,tocIndex:25},{value:"\u5BFC\u51FA ",paraId:28,tocIndex:25},{value:"AsyncModalContext",paraId:28,tocIndex:25},{value:"\u3001",paraId:28,tocIndex:25},{value:"AsyncModalRender",paraId:28,tocIndex:25},{value:"\u3001",paraId:28,tocIndex:25},{value:"AsyncModalRenderFactory",paraId:28,tocIndex:25},{value:" \u7B49\u6838\u5FC3\u7C7B\u578B",paraId:28,tocIndex:25},{value:"\u5C06 ",paraId:28,tocIndex:25},{value:"AsyncModalRenderCancelError",paraId:28,tocIndex:25},{value:" \u72EC\u7ACB\u4E3A\u5355\u72EC\u7684\u6A21\u5757\u5E76\u5BFC\u51FA",paraId:28,tocIndex:25},{value:"\u65B0\u589E Props \u8F6C\u6362\u4F7F\u7528\u793A\u4F8B\u548C\u8BE6\u7EC6\u8BF4\u660E",paraId:29,tocIndex:26},{value:"\u5B8C\u5584\u6240\u6709 API \u7684 TypeScript \u7C7B\u578B\u6807\u6CE8",paraId:29,tocIndex:26},{value:"\u66F4\u65B0\u5B89\u88C5\u8BF4\u660E\uFF0C\u4F7F\u7528\u7EC4\u4EF6\u5316\u7684\u5B89\u88C5\u6307\u4EE4",paraId:29,tocIndex:26},{value:"\u4E3A\u6838\u5FC3\u51FD\u6570\u6DFB\u52A0 JSDoc \u6CE8\u91CA",paraId:29,tocIndex:26},{value:"\u7EDF\u4E00\u4EE3\u7801\u98CE\u683C\uFF0C\u6DFB\u52A0\u5206\u53F7\u548C\u683C\u5F0F\u5316",paraId:30,tocIndex:27},{value:"\u4FEE\u590D\u6587\u6863\u793A\u4F8B\u4E2D\u7684\u8BED\u6CD5\u9519\u8BEF",paraId:30,tocIndex:27},{value:"2026-01-23",paraId:31,tocIndex:28},{value:"\u5B9E\u73B0 ",paraId:32,tocIndex:29},{value:"asyncModalRender",paraId:32,tocIndex:29},{value:" \u51FD\u6570\uFF0C\u652F\u6301\u4EE5 Promise \u65B9\u5F0F\u4F7F\u7528\u5F39\u7A97\u7EC4\u4EF6",paraId:32,tocIndex:29},{value:"\u5B9E\u73B0 ",paraId:32,tocIndex:29},{value:"useAsyncModalRender",paraId:32,tocIndex:29},{value:" Hook\uFF0C\u652F\u6301\u5728 React \u7EC4\u4EF6\u4E2D\u4F7F\u7528\u5F02\u6B65\u5F39\u7A97",paraId:32,tocIndex:29},{value:"\u5B9E\u73B0 ",paraId:32,tocIndex:29},{value:"AsyncModalRenderProvider",paraId:32,tocIndex:29},{value:" \u548C ",paraId:32,tocIndex:29},{value:"useAsyncModalRenderContext",paraId:32,tocIndex:29},{value:"\uFF0C\u63D0\u4F9B Context \u65B9\u5F0F\u7684\u96C6\u6210",paraId:32,tocIndex:29},{value:"\u63D0\u4F9B ",paraId:32,tocIndex:29},{value:"AsyncModalProps",paraId:32,tocIndex:29},{value:" \u57FA\u7840\u63A5\u53E3\uFF0C\u5B9A\u4E49\u5F39\u7A97\u7EC4\u4EF6\u7684\u6807\u51C6\u56DE\u8C03",paraId:32,tocIndex:29},{value:"\u5B9E\u73B0 ",paraId:32,tocIndex:29},{value:"AsyncModalRenderCancelError",paraId:32,tocIndex:29},{value:" \u9519\u8BEF\u7C7B\uFF0C\u7EDF\u4E00\u5904\u7406\u7528\u6237\u53D6\u6D88\u64CD\u4F5C",paraId:32,tocIndex:29},{value:"\u652F\u6301\u4E09\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A\u76F4\u63A5\u6E32\u67D3\u3001Hook \u65B9\u5F0F\u3001Context \u65B9\u5F0F",paraId:32,tocIndex:29},{value:"\u5B8C\u6574\u7684 TypeScript \u7C7B\u578B\u652F\u6301",paraId:32,tocIndex:29},{value:"\u57FA\u7840\u6587\u6863\u548C\u793A\u4F8B",paraId:32,tocIndex:29}]},88249:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:"\u672C\u6307\u5357\u5C06\u5E2E\u52A9\u4F60\u5728 3 \u5206\u949F\u5185\u4E0A\u624B async-modal-render\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u5B89\u88C5 async-modal-render\uFF1A",paraId:1,tocIndex:1},{value:"\u652F\u6301\u4E00\u4E0B\u51E0\u79CD\u4F7F\u7528\u65B9\u5F0F\uFF1A",paraId:2,tocIndex:2},{value:"\u5F39\u7A97\u7EC4\u4EF6 ",paraId:3,tocIndex:2},{value:"props",paraId:3,tocIndex:2},{value:" \u7B26\u5408 ",paraId:3,tocIndex:2},{value:"AsyncModalProps",paraId:3,tocIndex:2},{value:" \u89C4\u8303\uFF0C\u76F4\u63A5\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"render",paraId:3,tocIndex:2},{value:" \u51FD\u6570\u6E32\u67D3\u3002",paraId:3,tocIndex:2},{value:"\u4E1A\u52A1\u5DF2\u6709\u7684\u7EC4\u4EF6 ",paraId:3,tocIndex:2},{value:"props",paraId:3,tocIndex:2},{value:" \u4E0D\u7B26 ",paraId:3,tocIndex:2},{value:"AsyncModalProps",paraId:3,tocIndex:2},{value:" \u89C4\u8303\uFF0C\u76F4\u63A5\u901A\u8FC7 ",paraId:3,tocIndex:2},{value:"withAsyncModalPropsMapper",paraId:3,tocIndex:2},{value:" + ",paraId:3,tocIndex:2},{value:"render",paraId:3,tocIndex:2},{value:" \u51FD\u6570\u6E32\u67D3\u3002",paraId:3,tocIndex:2},{value:"render",paraId:4,tocIndex:2},{value:" \u51FD\u6570\u5206\u7C7B\u6709\uFF1A",paraId:4,tocIndex:2},{value:"asyncModalRender",paraId:5,tocIndex:2},{value:": \u76F4\u63A5\u5C06\u7EC4\u4EF6\u6E32\u67D3\u5230\u6307\u5B9A\u5BB9\u5668\u5143\u7D20\u4E0B",paraId:5,tocIndex:2},{value:"hook ",paraId:5,tocIndex:2},{value:"useAsyncModalRender",paraId:5,tocIndex:2},{value:" / ",paraId:5,tocIndex:2},{value:"useAsyncModalRenderContext",paraId:5,tocIndex:2},{value:"render",paraId:6,tocIndex:2},{value:"\uFF1A\u57FA\u7840\u6E32\u67D3\u51FD\u6570\uFF0C\u652F\u6301 ",paraId:6,tocIndex:2},{value:"renderQuiet",paraId:6,tocIndex:2},{value:"\u3001",paraId:6,tocIndex:2},{value:"renderPersistent",paraId:6,tocIndex:2},{value:" \u7684\u5168\u90E8\u529F\u80FD\u3002",paraId:6,tocIndex:2},{value:"renderQuiet",paraId:6,tocIndex:2},{value:"\uFF1A",paraId:6,tocIndex:2},{value:"render",paraId:6,tocIndex:2},{value:" \u7684\u5957\u58F3\uFF0C\u9759\u9ED8\u6E32\u67D3\u51FD\u6570\uFF0C",paraId:6,tocIndex:2},{value:"render",paraId:6,tocIndex:2},{value:" \u5728\u56DE\u8C03 ",paraId:6,tocIndex:2},{value:"onCancel",paraId:6,tocIndex:2},{value:" \u89E6\u53D1\u540E\u4F1A reject\uFF0C\u800C ",paraId:6,tocIndex:2},{value:"renderQuiet",paraId:6,tocIndex:2},{value:" \u4F1A resolve ",paraId:6,tocIndex:2},{value:"undefined",paraId:6,tocIndex:2},{value:"renderPersistent",paraId:6,tocIndex:2},{value:"\uFF1A",paraId:6,tocIndex:2},{value:"render",paraId:6,tocIndex:2},{value:" \u7684\u5957\u58F3\uFF0C\u72B6\u6001\u6301\u4E45\u5316\uFF0C\u5373\u5728 ",paraId:6,tocIndex:2},{value:"onCancel",paraId:6,tocIndex:2},{value:" \u89E6\u53D1\u540E\uFF0C\u4E0D\u5378\u8F7D\u5B9E\u4F8B\uFF0C\u4EC5\u6539\u53D8\u63A7\u5236\u5F39\u7A97\u53EF\u89C1\u6027\u7684 prop \u503C",paraId:6,tocIndex:2},{value:"factory",paraId:7,tocIndex:2},{value:" \u5DE5\u5382\u51FD\u6570\uFF1A",paraId:7,tocIndex:2},{value:"renderFactory",paraId:7,tocIndex:2},{value:" / ",paraId:7,tocIndex:2},{value:"renderQuietFactory",paraId:7,tocIndex:2},{value:" / ",paraId:7,tocIndex:2},{value:"renderPersistentFactory",paraId:7,tocIndex:2},{value:" \u521B\u5EFA\u5BF9\u5E94 ",paraId:7,tocIndex:2},{value:"render",paraId:7,tocIndex:2},{value:" \u51FD\u6570\u7684\u95ED\u5305\u51FD\u6570",paraId:7,tocIndex:2},{value:"\u521B\u5EFA\u4E00\u4E2A\u7B26\u5408 ",paraId:8,tocIndex:3},{value:"AsyncModalProps",paraId:8,tocIndex:3},{value:" \u63A5\u53E3\u7684 Modal \u7EC4\u4EF6\u3002\u4F60\u7684\u7EC4\u4EF6\u9700\u8981\u63A5\u6536 ",paraId:8,tocIndex:3},{value:"onOk",paraId:8,tocIndex:3},{value:" \u548C ",paraId:8,tocIndex:3},{value:"onCancel",paraId:8,tocIndex:3},{value:" \u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\uFF1A",paraId:8,tocIndex:3},{value:`import React from 'react';
import { AsyncModalProps } from 'async-modal-render';

interface ConfirmModalProps extends AsyncModalProps {
  onOk?: (v: string) => void;
  onCancel?: () => void
}

const ConfirmModal = ({ ..., onOk, onCancel }: ConfirmModalProps) => {
  return (
    <div className="modal-overlay">
      ...
      <div className="modal-footer">
        <button onClick={() => onCancel?.()}>\u53D6\u6D88</button>
        <button onClick={() => onOk?.('confirmed')}>\u786E\u5B9A</button>
      </div>
    </div>
  );
};

export default ConfirmModal;
`,paraId:9,tocIndex:3},{value:"\u4F7F\u7528",paraId:10,tocIndex:3},{value:`import { asyncModalRender } from 'async-modal-render';
import ConfirmModal from './ConfirmModal';

async function handleDelete() {
  try {
    const result = await asyncModalRender(ConfirmModal, {
      title: '\u786E\u8BA4\u5220\u9664',
      content: '\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F'
    });
    console.log('\u7528\u6237\u786E\u8BA4:', result); // 'confirmed'
    ...
  } catch (error) {
    console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C');
  }
}
`,paraId:11,tocIndex:3},{value:"\u4E1A\u52A1\u4E2D\u5DF2\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\u7684props\u5B9A\u4E49\u53EF\u80FD\u4E0D\u4E00\u81F4\u3002\u6B64\u65F6\u5C31\u9700\u8981\u4F7F\u7528 ",paraId:12,tocIndex:4},{value:"withAsyncModalPropsMapper",paraId:12,tocIndex:4},{value:" \u9AD8\u9636\u7EC4\u4EF6\u5904\u7406 ",paraId:12,tocIndex:4},{value:"props",paraId:12,tocIndex:4},{value:" \u7684\u6620\u5C04\u3002\u8FD9\u6837\u5C31\u53EF\u4EE5\u5728\u4E0D\u6539\u52A8\u539F\u672C\u7EC4\u4EF6\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528\u3002",paraId:12,tocIndex:4},{value:`import { withAsyncModalPropsMapper } from 'async-modal-render';

// EditorModal \u662F\u5DF2\u6709\u7684\u7EC4\u4EF6\uFF0C\u8FD9\u91CC\u6620\u5C04\uFF1AonFinished -> onOk, onClose -> onCancel
const EditorModalMapper = withAsyncModalPropsMapper(EditorModal, ['onFinished', 'onClose']);

async function publishArticle() {
  try {
    const content = await asyncModalRender(EditorModalMapper, { title: '\u7F16\u8F91\u6587\u7AE0' })
    ...
  } catch (error) {
    console.log('\u53D6\u6D88');
  }
}
`,paraId:13,tocIndex:4},{value:"\u5229\u7528 async/await \u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u591A\u6B65\u9AA4\u4EA4\u4E92\uFF1A",paraId:14,tocIndex:5},{value:`async function publishArticle() {
  try {
    // \u7B2C\u4E00\u6B65\uFF1A\u7F16\u8F91\u5185\u5BB9
    const content = await asyncModalRender(EditorModal, {
      title: '\u7F16\u8F91\u6587\u7AE0'
    });

    // \u7B2C\u4E8C\u6B65\uFF1A\u9009\u62E9\u5206\u7C7B
    const category = await asyncModalRender(CategorySelectModal, {
      title: '\u9009\u62E9\u5206\u7C7B'
    });

    // \u7B2C\u4E09\u6B65\uFF1A\u786E\u8BA4\u53D1\u5E03
    await asyncModalRender(ConfirmModal, {
      title: '\u786E\u8BA4\u53D1\u5E03',
      content: \`\u786E\u5B9A\u5C06\u6587\u7AE0\u53D1\u5E03\u5230\u300C\${category}\u300D\u5206\u7C7B\u5417\uFF1F\`
    });

    // \u6267\u884C\u53D1\u5E03
    await api.publish({ content, category });
    alert('\u53D1\u5E03\u6210\u529F\uFF01');
  } catch (error) {
    console.log('\u53D6\u6D88\u53D1\u5E03');
  }
}
`,paraId:15,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:16,tocIndex:6},{value:"AsyncModalRenderCancelError",paraId:16,tocIndex:6},{value:" \u533A\u5206\u7528\u6237\u53D6\u6D88\u548C\u5176\u4ED6\u9519\u8BEF\uFF1A",paraId:16,tocIndex:6},{value:`import { asyncModalRender, AsyncModalRenderCancelError } from 'async-modal-render';

async function handleSubmit() {
  try {
    const data = await asyncModalRender(FormModal, { title: '\u63D0\u4EA4\u8868\u5355' });
    await api.submit(data);
  } catch (error) {
    if (error instanceof AsyncModalRenderCancelError) {
      // \u7528\u6237\u4E3B\u52A8\u53D6\u6D88
      console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C');
    } else {
      // API \u8C03\u7528\u5931\u8D25\u6216\u5176\u4ED6\u9519\u8BEF
      alert('\u63D0\u4EA4\u5931\u8D25\uFF1A' + error.message);
    }
  }
}
`,paraId:17,tocIndex:6},{value:"\u662F\u7684\u3002\u5982\u679C\u4E0D\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF0CPromise \u5C06\u6C38\u8FDC\u4E0D\u4F1A resolve \u6216 reject\uFF0C\u5BFC\u81F4\u4EE3\u7801\u5361\u4F4F\u3002",paraId:18,tocIndex:8},{value:"\u53EF\u4EE5\u8C03\u7528\uFF0C\u4F46\u53EA\u6709\u7B2C\u4E00\u6B21\u8C03\u7528\u4F1A\u751F\u6548\u3002\u540E\u7EED\u8C03\u7528\u4F1A\u88AB\u5FFD\u7565\u3002",paraId:19,tocIndex:9},{value:"\u5F39\u7A97\u5C06\u65E0\u6CD5\u663E\u793A\uFF0C\u56E0\u4E3A holder \u662F\u5F39\u7A97\u7684\u5BB9\u5668\u3002\u52A1\u5FC5\u5728\u7EC4\u4EF6\u4E2D\u6E32\u67D3 ",paraId:20,tocIndex:10},{value:"{holder}",paraId:20,tocIndex:10},{value:"\u3002",paraId:20,tocIndex:10},{value:"asyncModalRender()",paraId:21,tocIndex:11},{value:" \u662F\u51FD\u6570\u5F0F\u8C03\u7528\uFF0C\u53EF\u5728\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA DOM \u5BB9\u5668",paraId:21,tocIndex:11},{value:"useAsyncModalRender()",paraId:21,tocIndex:11},{value:" \u662F Hook\uFF0C\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u9700\u8981\u624B\u52A8\u6E32\u67D3 holder",paraId:21,tocIndex:11},{value:"useAsyncModalRenderContext",paraId:21,tocIndex:11},{value:" \u662F Context Hook\uFF0C\u642D\u914D ",paraId:21,tocIndex:11},{value:"AsyncModalRenderProvider",paraId:21,tocIndex:11},{value:" \u53EF\u4EE5\u7701\u53BB\u624B\u52A8\u6E32\u67D3 holder \u7684\u6B65\u9AA4",paraId:21,tocIndex:11},{value:"\u73B0\u5728\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86 async-modal-render \u7684\u57FA\u672C\u7528\u6CD5\uFF01\u63A5\u4E0B\u6765\u53EF\u4EE5\uFF1A",paraId:22,tocIndex:12},{value:"\u67E5\u770B ",paraId:23,tocIndex:12},{value:"\u5B8C\u6574\u6587\u6863",paraId:24,tocIndex:12},{value:" \u4E86\u89E3\u66F4\u591A API \u7EC6\u8282",paraId:23,tocIndex:12},{value:"\u7ED3\u5408 Ant Design\u3001Material-UI \u7B49 UI \u5E93\u4F7F\u7528",paraId:23,tocIndex:12},{value:"\u6839\u636E\u9879\u76EE\u9700\u6C42\u5B9A\u5236\u4F60\u81EA\u5DF1\u7684 Modal \u7EC4\u4EF6",paraId:23,tocIndex:12},{value:"\u795D\u4F60\u4F7F\u7528\u6109\u5FEB\uFF01 \u{1F389}",paraId:25,tocIndex:12}]},6387:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:"async-modal-render",paraId:0,tocIndex:0},{value:" \u7ED3\u5408\u4E86\u51FD\u6570\u5F0F\u8C03\u7528\u7684\u4FBF\u5229\u6027\u548C\u5BF9\u73B0\u6709\u7EC4\u4EF6\u7684\u4F4E\u4FB5\u5165\u6027\uFF0C\u5728\u5F00\u53D1\u6548\u7387\u3001\u4EE3\u7801\u8D28\u91CF\u548C\u7EF4\u62A4\u6027\u4E0A\u90FD\u6709\u663E\u8457\u4F18\u52BF\u3002",paraId:0,tocIndex:0},{value:"NiceModal \u6307\u7684\u662F\uFF1A@ebay/nice-modal-react",paraId:1,tocIndex:1},{value:"\u7279\u6027",paraId:2,tocIndex:1},{value:"Normal (\u4F20\u7EDF\u65B9\u5F0F)",paraId:2,tocIndex:1},{value:"NiceModal",paraId:2,tocIndex:1},{value:"Async Modal Render",paraId:2,tocIndex:1},{value:"\u72B6\u6001\u7BA1\u7406",paraId:2,tocIndex:1},{value:"\u624B\u52A8 (useState)",paraId:2,tocIndex:1},{value:"\u5168\u5C40\u72B6\u6001\u7BA1\u7406 (Hook \u8BBF\u95EE)",paraId:2,tocIndex:1},{value:"\u81EA\u52A8 (\u65E0\u9700 State)",paraId:2,tocIndex:1},{value:"\u7EC4\u4EF6\u6302\u8F7D",paraId:2,tocIndex:1},{value:"JSX \u663E\u5F0F\u6302\u8F7D",paraId:2,tocIndex:1},{value:"\u9700\u8981 Wrapper \u6CE8\u518C",paraId:2,tocIndex:1},{value:"\u51FD\u6570\u8C03\u7528\u81EA\u52A8\u6302\u8F7D",paraId:2,tocIndex:1},{value:"\u903B\u8F91\u6D41\u7A0B",paraId:2,tocIndex:1},{value:"\u5206\u6563 (onClick/onOk)",paraId:2,tocIndex:1},{value:"\u57FA\u4E8E Promise",paraId:2,tocIndex:1},{value:"\u57FA\u4E8E Promise",paraId:2,tocIndex:1},{value:"\u7EC4\u4EF6\u4FB5\u5165\u6027",paraId:2,tocIndex:1},{value:"\u4F4E",paraId:2,tocIndex:1},{value:"\u9AD8 (\u9700\u5F15\u5165 useModal)",paraId:2,tocIndex:1},{value:"\u96F6 (\u7EAF\u51C0\u7EC4\u4EF6)",paraId:2,tocIndex:1},{value:"\u7C7B\u578B\u652F\u6301",paraId:2,tocIndex:1},{value:"\u624B\u52A8\u5B9A\u4E49",paraId:2,tocIndex:1},{value:"\u90E8\u5206\u652F\u6301",paraId:2,tocIndex:1},{value:"\u5168\u81EA\u52A8\u63A8\u5BFC (Props/Result)",paraId:2,tocIndex:1},{value:"\u751F\u547D\u5468\u671F",paraId:2,tocIndex:1},{value:"\u624B\u52A8\u63A7\u5236",paraId:2,tocIndex:1},{value:"hide\u9ED8\u8BA4\u4FDD\u7559 (\u9700\u624B\u52A8 remove)",paraId:2,tocIndex:1},{value:"\u9ED8\u8BA4\u9500\u6BC1 / \u6309\u9700\u6301\u4E45\u5316",paraId:2,tocIndex:1},{value:"\u4EE3\u7801\u91CF",paraId:2,tocIndex:1},{value:"\u7E41\u7410",paraId:2,tocIndex:1},{value:"\u4E2D\u7B49",paraId:2,tocIndex:1},{value:"\u6700\u7B80",paraId:2,tocIndex:1},{value:"Normal:",paraId:3,tocIndex:3},{value:" \u9700\u8981\u5B9A\u4E49\u5927\u91CF\u7684 ",paraId:3,tocIndex:3},{value:"useState",paraId:3,tocIndex:3},{value:`\uFF0C\u7F16\u5199\u5F00\u5173\u5904\u7406\u51FD\u6570\uFF0C\u5E76\u4E14\u5FC5\u987B\u5728 JSX \u4E2D\u663E\u5F0F\u6302\u8F7D\u7EC4\u4EF6\u3002
`,paraId:3,tocIndex:3},{value:"Async Modal Render:",paraId:3,tocIndex:3},{value:" \u5B8C\u5168\u4E0D\u9700\u8981\u5B9A\u4E49 State\uFF0C\u4E5F\u4E0D\u9700\u8981\u5728 JSX \u4E2D\u9884\u57CB\u7EC4\u4EF6\u3002",paraId:3,tocIndex:3},{value:"\u4EE3\u7801\u5BF9\u6BD4:",paraId:4,tocIndex:3},{value:`// Normal.tsx (\u4F20\u7EDF\u65B9\u5F0F)
function NormalExample() {
  const [visible, setVisible] = useState(false); // \u274C \u5197\u4F59\u72B6\u6001

  return (
    <>
      <Button onClick={() => setVisible(true)}>Open</Button>
      {/* \u274C JSX \u6C61\u67D3 */}
      <MyModal
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      />
    </>
  );
}

// AsyncModalExample.tsx (Async Modal Render)
function AsyncExample() {
  const { render } = useAsyncModalRenderContext();
  // \u2705 \u7EAF\u51FD\u6570\u8C03\u7528\uFF0C\u65E0\u72B6\u6001\uFF0C\u65E0 JSX \u6302\u8F7D
  return <Button onClick={() => render(MyModal, { visible: true })}>Open</Button>;
}
`,paraId:5,tocIndex:3},{value:"Normal:",paraId:6,tocIndex:4},{value:" \u4E1A\u52A1\u903B\u8F91\u88AB\u5206\u6563\u5728 ",paraId:6,tocIndex:4},{value:"onClick",paraId:6,tocIndex:4},{value:"\uFF08\u6253\u5F00\uFF09\u3001",paraId:6,tocIndex:4},{value:"onOk",paraId:6,tocIndex:4},{value:"\uFF08\u786E\u8BA4\uFF09\u3001",paraId:6,tocIndex:4},{value:"onCancel",paraId:6,tocIndex:4},{value:`\uFF08\u53D6\u6D88\uFF09\u7B49\u591A\u4E2A\u56DE\u8C03\u51FD\u6570\u4E2D\uFF0C\u5BFC\u81F4\u4EE3\u7801\u5272\u88C2\uFF0C\u9605\u8BFB\u56F0\u96BE\u3002
`,paraId:6,tocIndex:4},{value:"Async Modal Render:",paraId:6,tocIndex:4},{value:" \u4F7F\u7528 ",paraId:6,tocIndex:4},{value:"await",paraId:6,tocIndex:4},{value:" \u5728\u4E00\u4E2A\u51FD\u6570\u5185\u5B8C\u6210\u201C\u6253\u5F00 -> \u7B49\u5F85\u64CD\u4F5C -> \u83B7\u53D6\u7ED3\u679C\u201D\u7684\u5B8C\u6574\u6D41\u7A0B\uFF0C\u903B\u8F91\u8FDE\u8D2F\u3002",paraId:6,tocIndex:4},{value:`// Async Modal Render: \u903B\u8F91
const handleSubmit = async () => {
  try {
    const inputValue = await render(InputModal, { visible: true });
    // \u2705 \u903B\u8F91\u7D27\u51D1\uFF1A\u83B7\u53D6\u7ED3\u679C\u540E\u76F4\u63A5\u7EE7\u7EED\u6267\u884C
    await submitToApi(inputValue);
    message.success('\u64CD\u4F5C\u6210\u529F');
  } catch {
    message.info('\u7528\u6237\u5DF2\u53D6\u6D88');
  }
};
`,paraId:7,tocIndex:4},{value:"NiceModal:",paraId:8,tocIndex:6},{value:" \u4E3A\u4E86\u4F7F\u7528\u73B0\u6709\u7684\u5F39\u7A97\u7EC4\u4EF6\uFF0C\u5FC5\u987B\u5148\u4F7F\u7528 ",paraId:8,tocIndex:6},{value:"NiceModal.create",paraId:8,tocIndex:6},{value:" \u521B\u5EFA\u4E00\u4E2A\u5305\u88C5\u5668 (Wrapper) \u6765\u5904\u7406 ",paraId:8,tocIndex:6},{value:"useModal",paraId:8,tocIndex:6},{value:` \u7684
resolve/reject \u903B\u8F91\u3002
`,paraId:8,tocIndex:6},{value:"Async Modal Render:",paraId:8,tocIndex:6},{value:" \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u539F\u59CB\u7EC4\u4EF6\uFF0C\u96F6\u4FB5\u5165\u6027\u3002\u5982\u679C Props \u547D\u540D\u4E0D\u6807\u51C6\uFF0C\u53EF\u4EE5\u4F7F\u7528 ",paraId:8,tocIndex:6},{value:"withAsyncModalPropsMapper",paraId:8,tocIndex:6},{value:`
\u5728\u884C\u5185\u52A8\u6001\u6620\u5C04\uFF0C\u65E0\u9700\u989D\u5916\u6587\u4EF6\u6216\u7EC4\u4EF6\u5B9A\u4E49\u3002`,paraId:8,tocIndex:6},{value:`// \u73B0\u6709\u7684\u7EC4\u4EF6
function MyModal () { ... }

// NiceModal: \u274C \u5FC5\u987B\u5B9A\u4E49 Wrapper
const MyModalWrapper = NiceModal.create(() => {
  const modal = useModal(); // \u8026\u5408
  return <MyModal open={modal.visible} onConfirm={modal.resolve} .../>;
});
// \u518D\u901A\u8FC7 NiceModal.show \u8C03\u7528
await NiceModal.show(MyModalWrapper, {})

// Async Modal Render: \u2705 props \u4EC5\u952E\u540D\u79F0\u6620\u5C04\uFF0C\u65E0\u8026\u5408\u4EE3\u7801\u3002\u82E5\u7B26\u5408 onOk\uFF0ConCancel \u952E\u540D\u79F0\uFF0C\u5219\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528
const MyModalWrapper2 = withAsyncModalPropsMapper(MyCustomModal, ['onConfirm', 'onClose']);
await render(
  MyModalWrapper2,
  { open: true }
);
`,paraId:9,tocIndex:6},{value:"NiceModal:",paraId:10,tocIndex:7},{value:" UI \u7EC4\u4EF6\u5185\u90E8\u5FC5\u987B\u5F15\u5165 ",paraId:10,tocIndex:7},{value:"nice-modal-react",paraId:10,tocIndex:7},{value:" \u5E93\uFF0C\u5E76\u4F7F\u7528 ",paraId:10,tocIndex:7},{value:"useModal",paraId:10,tocIndex:7},{value:" Hook\u3002\u8FD9\u4F7F\u5F97 UI \u7EC4\u4EF6\u4E0E\u7279\u5B9A\u5E93\u6DF1\u5EA6\u8026\u5408\uFF0C\u96BE\u4EE5\u5728\u4E0D\u4F7F\u7528 NiceModal \u7684\u573A\u666F\u4E0B\u590D\u7528\uFF08\u4F8B\u5982\u76F4\u63A5\u4F5C\u4E3A\u5E38\u89C4\u7EC4\u4EF6\u5D4C\u5165\u9875\u9762\uFF09\u3002",paraId:10,tocIndex:7},{value:"Async Modal Render:",paraId:11,tocIndex:7},{value:" UI \u7EC4\u4EF6\u5B8C\u5168\u4E0D\u9700\u8981\u5F15\u5165 ",paraId:11,tocIndex:7},{value:"async-modal-render",paraId:11,tocIndex:7},{value:"\u3002\u5B83\u53EA\u662F\u4E00\u4E2A\u666E\u901A\u7684 React \u7EC4\u4EF6\uFF0C\u901A\u8FC7 Props \u63A5\u6536\u56DE\u8C03\u3002\u5E93\u7684\u903B\u8F91\u5B8C\u5168\u5C01\u88C5\u5728\u8C03\u7528\u5C42\uFF0C\u5B9E\u73B0\u771F\u6B63\u7684\u975E\u4FB5\u5165\u5F0F\u8BBE\u8BA1\u3002",paraId:11,tocIndex:7},{value:"\u5982\u679C\u7EC4\u4EF6\u4E00\u5F00\u59CB\u5C31\u662F\u7528 ",paraId:12,tocIndex:7},{value:"NiceModal.create",paraId:12,tocIndex:7},{value:" \u521B\u5EFA\u7684\uFF0C\u5219\u65E0\u6CD5\u76F4\u63A5\u8C03\u7528\u3001\u6216\u76F4\u63A5\u4F20\u9012\u7ED9\u7B2C\u4E09\u65B9\u7EC4\u4EF6\u3001\u6846\u67B6\u4F7F\u7528\uFF0C\u5FC5\u987B\u4F9D\u8D56 ",paraId:12,tocIndex:7},{value:"NiceModal.show",paraId:12,tocIndex:7},{value:" \u8C03\u7528\u3002",paraId:12,tocIndex:7},{value:`// \u4F7F\u7528 NiceModal \u51FD\u6570\u5305\u88C5\u7EC4\u4EF6
const SelectUserModal = NiceModal.create((props) => {
  const modal = useModal(); // \u274C \u5F3A\u8026\u5408\uFF1A\u7EC4\u4EF6\u79BB\u5F00\u4E86 NiceModal \u73AF\u5883\u5C31\u5931\u6548\u4E86
  // \u7EC4\u4EF6\u5B9E\u73B0
  return <Xxxx>...</Xxxx>;
});

// \u2705\u53EA\u80FD\u901A\u8FC7 \`NiceModal.show\` \u8C03\u7528 
NiceModal.show(SelectUserModal, { ... })

// \u274C\u4E0D\u80FD\u76F4\u63A5\u8C03\u7528 \uFF08\u82E5\u975E\u8981\u4F7F\u7528\uFF0C\u5219\u9700\u8981\u4F20\u5165\u4E0E NiceModal \u8026\u5408\u7684 \`id\` \`defaultVisible\` \`keepMounted\`\uFF0C\u4E14\u5728 NiceModal.Provider \u7EC4\u4EF6\u4E0B\uFF09
<SelectUserModal ... />

// \u274C\u4E0D\u80FD\u4F20\u9012\u7ED9\u7B2C\u4E09\u65B9\u5305, \u5185\u90E8\u4F1A\u76F4\u63A5\u5B9E\u4F8B\u5316 SelectUserModal
import { register } from 'xxx';
register('select-user', SelectUserModal)

// \u2705 \u53EF\u4EE5\u5728\u5176\u4ED6\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u4E0D\u4F9D\u8D56\u4EFB\u4F55 async-modal-render \u7684\u652F\u6301\u3002\u6B64\u51FD\u6570\u5185\u90E8\u4EC5\u662F\u505A\u4E86 props \u5B57\u6BB5\u540D\u79F0\u6620\u5C04\u4E0ETS\u7C7B\u578B\u7EA6\u675F
const TempComp = withAsyncModalPropsMapper(Xxxx, ['onConfirm', 'onClose'])
`,paraId:13,tocIndex:7},{value:"NiceModal:",paraId:14,tocIndex:8},{value:" \u9ED8\u8BA4\u884C\u4E3A\u662F\u201C\u4FDD\u7559\u201D\u3002\u5173\u95ED\u5F39\u7A97\u540E\uFF0CDOM \u8282\u70B9\u4ECD\u7136\u5B58\u5728\uFF0C\u5FC5\u987B\u663E\u5F0F\u8C03\u7528 ",paraId:14,tocIndex:8},{value:"modal.remove()",paraId:14,tocIndex:8},{value:` \u624D\u80FD\u9500\u6BC1\u3002\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002
`,paraId:14,tocIndex:8},{value:"Async Modal Render:",paraId:14,tocIndex:8},{value:" \u9ED8\u8BA4\u884C\u4E3A\u662F\u201C\u9500\u6BC1\u201D\u3002",paraId:14,tocIndex:8},{value:"render",paraId:14,tocIndex:8},{value:" Promise \u7ED3\u675F\u540E\uFF0C\u5E93\u4F1A\u81EA\u52A8\u5378\u8F7D\u7EC4\u4EF6\u5E76\u6E05\u7406 DOM\u3002\u5929\u7136\u675C\u7EDD\u5185\u5B58\u6CC4\u6F0F\u3002\u9ED8\u8BA4\u9500\u6BC1\u4FDD\u8BC1\u4E86\u6BCF\u6B21\u6253\u5F00\u90FD\u662F\u5168\u65B0\u7684\u72B6\u6001 (Reset)\u3002\u540C\u65F6\u63D0\u4F9B\u4E86\u663E\u5F0F\u7684\u6301\u4E45\u5316\u9009\u9879 (",paraId:14,tocIndex:8},{value:"persistent",paraId:14,tocIndex:8},{value:` key)
\uFF0C\u63A7\u5236\u6743\u66F4\u7CBE\u51C6\u3002`,paraId:14,tocIndex:8},{value:`// NiceModal
const SelectUserModal = NiceModal.create((props) => {
  const modal = useModal(); // \u274C \u5F3A\u8026\u5408\uFF1A\u7EC4\u4EF6\u79BB\u5F00\u4E86 NiceModal \u73AF\u5883\u5C31\u5931\u6548\u4E86
  // \u7EC4\u4EF6\u5B9E\u73B0
  return <Xxxx 
    onClose={() => {
      modal.resolve(); // \u89E6\u53D1 Promise \u72B6\u6001\u6D41\u8F6C
      // modal.hide() // \u4EC5\u4FEE\u6539 model.visible
      modal.remove(); // \u5378\u8F7D\u5F39\u7A97
    }}
  >...</Xxxx>;
});

// \u2705\u53EA\u80FD\u901A\u8FC7 \`NiceModal.show\` \u8C03\u7528 
NiceModal.show(SelectUserModal, { ... })

// async-modal-render
// \u663E\u793A\u7684\u6301\u4E45\u5316\u9009\u9879
render(MyModal, { ... }, { persistent: 'unique-modal', openField: 'open' })

// \u9700\u8981\u624B\u52A8\u5378\u8F7D\uFF0C\u6216 \u5F53\u524D\u7EC4\u4EF6\u51FD\u6570\u751F\u547D\u5468\u671F\u7ED3\u675F\u540E\uFF0C\u81EA\u52A8\u5378\u8F7D\u3002
destroy({ persistent: 'unique-modal' })
// useAsyncModalRenderContext\u7684render\u5BF9\u5E94AsyncModalRenderProvider
// todo: \u540E\u7EED\u5F15\u5165 destroyStrategy \u914D\u7F6E\u9879\u6765\u63A7\u5236\u5378\u8F7D\u65F6\u673A\uFF0C\u4EE5\u4FBF\u5B9E\u73B0\u5168\u5C40\u3001\u5C40\u90E8\u7684\u6301\u4E45\u5316\u914D\u7F6E\u3002
`,paraId:15,tocIndex:8},{value:"async-modal-render",paraId:16,tocIndex:9},{value:" \u63D0\u4F9B\u4E86\u4F18\u79C0\u7684 TypeScript \u7C7B\u578B\u63A8\u5BFC\u80FD\u529B\u3002",paraId:16,tocIndex:9},{value:"\u5165\u53C2\u7C7B\u578B\u7EA6\u675F",paraId:17,tocIndex:9},{value:"\uFF1A\u81EA\u52A8\u68C0\u67E5\u4F20\u5165\u7684 ",paraId:17,tocIndex:9},{value:"props",paraId:17,tocIndex:9},{value:" \u662F\u5426\u7B26\u5408\u7EC4\u4EF6\u5B9A\u4E49\u3002",paraId:17,tocIndex:9},{value:"\u8FD4\u56DE\u503C\u7C7B\u578B\u63A8\u5BFC",paraId:17,tocIndex:9},{value:"\uFF1A",paraId:17,tocIndex:9},{value:"await render(...)",paraId:17,tocIndex:9},{value:" \u7684\u8FD4\u56DE\u503C\u7C7B\u578B\u4F1A\u81EA\u52A8\u63A8\u5BFC\u4E3A\u7EC4\u4EF6\u56DE\u8C03\u51FD\u6570\u7684\u53C2\u6570\u7C7B\u578B\u3002",paraId:17,tocIndex:9},{value:`// NiceModal.show<Result, Component Props, Props>
// \u901A\u8FC7\u7B2C\u4E00\u4E2A\u6CDB\u578B\u6307\u5B9A\u8FD4\u56DE\u503C\u7C7B\u578B\uFF0C\u8BE5\u7C7B\u578B\u4E0Emodal.resolve\u7684\u8FD4\u7C7B\u578B\u65E0\u7EA6\u675F\uFF0C
// \u5373modal.resolve('string') \u6539\u6210 modal.resolve(90), \u8FD9\u91CC\u7684\u5F15\u7528\u4E5F\u4E0D\u4F1A\u89E6\u53D1TS\u7684\u7C7B\u578B\u6821\u9A8C\u9519\u8BEF
// \u5F53\u524D"version": "1.2.13", \u7248\u672C\uFF0C\u586B\u5199\u4E86\u7B2C\u4E00\u4E2A\u6CDB\u578B\u5C31\u5FC5\u987B\u8865\u5168\u540E\u7EED\u7684\u4E24\u4E2A\u6CDB\u578B
const data = await NiceModal.show<string, MyModalProps, MyModalProps>(MyModal)

// async-modal-render \u2705 \u81EA\u52A8\u63A8\u5BFC result \u7C7B\u578B\uFF0C\u65E0\u9700\u624B\u52A8\u6CDB\u578B
const result = await render(
  MyModal,
  { visible: true },
  {
    // \u6307\u5B9A\u4E00\u4E2A\u56FA\u5B9A\u7684 key \u5B9E\u73B0\u6301\u4E45\u5316
    persistent: 'my-unique-modal',
    // \u53EA\u80FD\u586B\u5199 boolean \u7C7B\u578B\u7684 key
    openField: 'open'
  }
);
console.log(result.data); // IDE \u667A\u80FD\u63D0\u793A\u53EF\u7528
`,paraId:18,tocIndex:9}]},11579:function(n,e,a){a.r(e),a.d(e,{texts:function(){return d}});const d=[{value:"\u4E00\u4E2A\u5C06 React \u6A21\u6001\u6846\u64CD\u4F5C Promise \u5316\u7684\u8F7B\u91CF\u7EA7\u5DE5\u5177\u5E93\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"async/await",paraId:0,tocIndex:0},{value:" \u8BED\u6CD5\u4F18\u96C5\u5730\u5904\u7406\u6A21\u6001\u6846\u4EA4\u4E92\u3002",paraId:0,tocIndex:0},{value:"\u5728\u4F20\u7EDF\u7684 Modal \u4F7F\u7528\u65B9\u5F0F\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u7528\u6237\u7684\u64CD\u4F5C\uFF0C\u8FD9\u5BFC\u81F4\u4EE3\u7801\u903B\u8F91\u5206\u6563\uFF0C\u96BE\u4EE5\u7EF4\u62A4\uFF1A",paraId:1,tocIndex:2},{value:`// \u274C \u4F20\u7EDF\u65B9\u5F0F\uFF1A\u4EE3\u7801\u903B\u8F91\u5206\u6563\uFF0C\u96BE\u4EE5\u9605\u8BFB
function TraditionalWay() {
  const [visible, setVisible] = useState(false);

  // \u70B9\u51FB\u6309\u94AE\u7684\u903B\u8F91
  const handleClick = () => {
    setVisible(true);
  };

  // \u786E\u8BA4\u7684\u56DE\u8C03\u903B\u8F91 - \u5206\u6563\u5728\u53E6\u4E00\u4E2A\u5730\u65B9
  const handleOk = async (formData) => {
    try {
      // \u7EE7\u7EED\u540E\u7EED\u64CD\u4F5C...
    } catch (error) {
      message.error('\u63D0\u4EA4\u5931\u8D25');
    } finally {
      setVisible(false);
    }
  };

  // \u53D6\u6D88\u7684\u56DE\u8C03\u903B\u8F91 - \u53C8\u5728\u53E6\u4E00\u4E2A\u5730\u65B9
  const handleCancel = () => {
    setVisible(false);
    // \u53D6\u6D88\u540E\u7684\u5904\u7406...
  };

  return (
    <>
      <Button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</Button>
      <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form />
      </Modal>
    </>
  );
}
`,paraId:2,tocIndex:2},{value:"\u4F7F\u7528 async-modal-render\uFF0C\u4EE3\u7801\u903B\u8F91\u96C6\u4E2D\u5728\u4E00\u5904\uFF0C\u6E05\u6670\u6613\u61C2\uFF1A",paraId:3,tocIndex:3},{value:`import { asyncModalRender } from 'async-modal-render'

// \u2705 async-modal-render \u65B9\u5F0F\uFF1A\u903B\u8F91\u96C6\u4E2D\uFF0C\u4EE3\u7801\u6E05\u6670
function AsyncModalWay () {
  const handleClick = async () => {
    try {
      // \u5F39\u7A97\u903B\u8F91\u3001\u786E\u8BA4\u903B\u8F91\u3001\u540E\u7EED\u5904\u7406\u90FD\u5728\u4E00\u8D77, FormModal \u4E2D\u9700\u8981\u63D0\u4F9B onOk\\onCancel \u56DE\u8C03\u5904\u7406
      const formData = await asyncModalRender(FormModal, { title: '\u586B\u5199\u8868\u5355' })

      // \u7528\u6237\u70B9\u51FB\u786E\u8BA4\u540E\u624D\u4F1A\u6267\u884C\u5230\u8FD9\u91CC
      await api.submit(formData)
      message.success('\u63D0\u4EA4\u6210\u529F')

      // \u7EE7\u7EED\u540E\u7EED\u64CD\u4F5C

    } catch (error) {
      // \u7528\u6237\u70B9\u51FB\u53D6\u6D88\u6216\u53D1\u751F\u9519\u8BEF\u90FD\u4F1A\u8FDB\u5165\u8FD9\u91CC
      if (error instanceof AsyncModalRenderCancelError) {
        console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C')
      } else {
        message.error('\u63D0\u4EA4\u5931\u8D25')
      }
    }
  }

  return <Button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</Button>;
}
`,paraId:4,tocIndex:3},{value:"\u7279\u6027",paraId:5,tocIndex:4},{value:"\u4F20\u7EDF Modal",paraId:5,tocIndex:4},{value:"async-modal-render",paraId:5,tocIndex:4},{value:"\u4EE3\u7801\u7EC4\u7EC7",paraId:5,tocIndex:4},{value:"\u56DE\u8C03\u51FD\u6570\u5206\u6563\u5728\u591A\u5904",paraId:5,tocIndex:4},{value:"async/await \u96C6\u4E2D\u5904\u7406",paraId:5,tocIndex:4},{value:"\u53EF\u8BFB\u6027",paraId:5,tocIndex:4},{value:"\u9700\u8981\u8DF3\u8F6C\u67E5\u770B\u4E0D\u540C\u56DE\u8C03",paraId:5,tocIndex:4},{value:"\u4ECE\u4E0A\u5230\u4E0B\u7EBF\u6027\u9605\u8BFB",paraId:5,tocIndex:4},{value:"\u6D41\u7A0B\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u9700\u8981\u72B6\u6001\u7BA1\u7406",paraId:5,tocIndex:4},{value:"Promise \u81EA\u7136\u6D41\u8F6C",paraId:5,tocIndex:4},{value:"\u9519\u8BEF\u5904\u7406",paraId:5,tocIndex:4},{value:"\u5206\u6563\u5728\u5404\u4E2A\u56DE\u8C03",paraId:5,tocIndex:4},{value:"try/catch \u7EDF\u4E00\u5904\u7406",paraId:5,tocIndex:4},{value:"\u5F02\u6B65\u64CD\u4F5C",paraId:5,tocIndex:4},{value:"\u56DE\u8C03\u5D4C\u5957",paraId:5,tocIndex:4},{value:"async/await \u6241\u5E73\u5316",paraId:5,tocIndex:4}]}}]);
