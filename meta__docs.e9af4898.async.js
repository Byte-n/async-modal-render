"use strict";(self.webpackChunkawaitable_modal=self.webpackChunkawaitable_modal||[]).push([[904],{50136:function(o,n,a){a.r(n),a.d(n,{demos:function(){return t}});var e=a(75271),t={}},28511:function(o,n,a){a.r(n),a.d(n,{demos:function(){return t}});var e=a(75271),t={}},68037:function(o,n,a){a.r(n),a.d(n,{texts:function(){return e}});const e=[{value:"\u672C\u6307\u5357\u5C06\u5E2E\u52A9\u4F60\u5728 3 \u5206\u949F\u5185\u4E0A\u624B awaitable-modal\u3002",paraId:0,tocIndex:0},{value:"\u4F7F\u7528\u4F60\u559C\u6B22\u7684\u5305\u7BA1\u7406\u5668\u5B89\u88C5 awaitable-modal\uFF1A",paraId:1,tocIndex:1},{value:`# npm
npm install awaitable-modal

# pnpm
pnpm add awaitable-modal

# yarn
yarn add awaitable-modal
`,paraId:2,tocIndex:1},{value:"\u521B\u5EFA\u4E00\u4E2A\u7B26\u5408 ",paraId:3,tocIndex:3},{value:"AsyncModalProps",paraId:3,tocIndex:3},{value:" \u63A5\u53E3\u7684 Modal \u7EC4\u4EF6\u3002\u4F60\u7684\u7EC4\u4EF6\u9700\u8981\u63A5\u6536 ",paraId:3,tocIndex:3},{value:"onOk",paraId:3,tocIndex:3},{value:" \u548C ",paraId:3,tocIndex:3},{value:"onCancel",paraId:3,tocIndex:3},{value:" \u4E24\u4E2A\u56DE\u8C03\u51FD\u6570\uFF1A",paraId:3,tocIndex:3},{value:`import React from 'react';
import { AsyncModalProps } from 'awaitable-modal';

interface ConfirmModalProps extends AsyncModalProps {
  title: string;
  content: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  title,
  content,
  onOk,
  onCancel
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h3>{title}</h3>
        </div>
        <div className="modal-body">
          <p>{content}</p>
        </div>
        <div className="modal-footer">
          <button onClick={() => onCancel?.()}>\u53D6\u6D88</button>
          <button onClick={() => onOk?.('confirmed')}>\u786E\u5B9A</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
`,paraId:4,tocIndex:3},{value:"\u5173\u952E\u70B9",paraId:5,tocIndex:3},{value:"\uFF1A",paraId:5,tocIndex:3},{value:"\u7EE7\u627F ",paraId:6,tocIndex:3},{value:"AsyncModalProps",paraId:6,tocIndex:3},{value:" \u63A5\u53E3",paraId:6,tocIndex:3},{value:"\u5728\u9002\u5F53\u7684\u65F6\u673A\u8C03\u7528 ",paraId:6,tocIndex:3},{value:"onOk()",paraId:6,tocIndex:3},{value:" \u6216 ",paraId:6,tocIndex:3},{value:"onCancel()",paraId:6,tocIndex:3},{value:"onOk()",paraId:6,tocIndex:3},{value:" \u7684\u53C2\u6570\u4F1A\u4F5C\u4E3A Promise \u7684\u8FD4\u56DE\u503C",paraId:6,tocIndex:3},{value:`import { asyncModal } from 'awaitable-modal';
import ConfirmModal from './ConfirmModal';

async function handleDelete() {
  try {
    const result = await asyncModal(ConfirmModal, {
      title: '\u786E\u8BA4\u5220\u9664',
      content: '\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u786E\u5B9A\u8981\u5220\u9664\u5417\uFF1F'
    });

    console.log('\u7528\u6237\u786E\u8BA4:', result); // 'confirmed'
    // \u6267\u884C\u5220\u9664\u64CD\u4F5C
    await deleteItem();
    alert('\u5220\u9664\u6210\u529F\uFF01');
  } catch (error) {
    console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C');
  }
}
`,paraId:7,tocIndex:4},{value:"\u5229\u7528 async/await \u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u591A\u6B65\u9AA4\u4EA4\u4E92\uFF1A",paraId:8,tocIndex:5},{value:`async function publishArticle() {
  try {
    // \u7B2C\u4E00\u6B65\uFF1A\u7F16\u8F91\u5185\u5BB9
    const content = await render(EditorModal, {
      title: '\u7F16\u8F91\u6587\u7AE0'
    });

    // \u7B2C\u4E8C\u6B65\uFF1A\u9009\u62E9\u5206\u7C7B
    const category = await render(CategorySelectModal, {
      title: '\u9009\u62E9\u5206\u7C7B'
    });

    // \u7B2C\u4E09\u6B65\uFF1A\u786E\u8BA4\u53D1\u5E03
    await render(ConfirmModal, {
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
`,paraId:9,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:10,tocIndex:6},{value:"AsyncModalCancelError",paraId:10,tocIndex:6},{value:" \u533A\u5206\u7528\u6237\u53D6\u6D88\u548C\u5176\u4ED6\u9519\u8BEF\uFF1A",paraId:10,tocIndex:6},{value:`import { asyncModal, AsyncModalCancelError } from 'awaitable-modal';

async function handleSubmit() {
  try {
    const data = await render(FormModal, { title: '\u63D0\u4EA4\u8868\u5355' });
    await api.submit(data);
  } catch (error) {
    if (error instanceof AsyncModalCancelError) {
      // \u7528\u6237\u4E3B\u52A8\u53D6\u6D88
      console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C');
    } else {
      // API \u8C03\u7528\u5931\u8D25\u6216\u5176\u4ED6\u9519\u8BEF
      alert('\u63D0\u4EA4\u5931\u8D25\uFF1A' + error.message);
    }
  }
}
`,paraId:11,tocIndex:6},{value:"\u662F\u7684\u3002\u5982\u679C\u4E0D\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u4E2D\u7684\u4EFB\u4F55\u4E00\u4E2A\uFF0CPromise \u5C06\u6C38\u8FDC\u4E0D\u4F1A resolve \u6216 reject\uFF0C\u5BFC\u81F4\u4EE3\u7801\u5361\u4F4F\u3002",paraId:12,tocIndex:8},{value:"\u53EF\u4EE5\u8C03\u7528\uFF0C\u4F46\u53EA\u6709\u7B2C\u4E00\u6B21\u8C03\u7528\u4F1A\u751F\u6548\u3002\u540E\u7EED\u8C03\u7528\u4F1A\u88AB\u5FFD\u7565\u3002",paraId:13,tocIndex:9},{value:"\u5F39\u7A97\u5C06\u65E0\u6CD5\u663E\u793A\uFF0C\u56E0\u4E3A holder \u662F\u5F39\u7A97\u7684\u5BB9\u5668\u3002\u52A1\u5FC5\u5728\u7EC4\u4EF6\u4E2D\u6E32\u67D3 ",paraId:14,tocIndex:10},{value:"{holder}",paraId:14,tocIndex:10},{value:"\u3002",paraId:14,tocIndex:10},{value:"asyncModal()",paraId:15,tocIndex:11},{value:" \u662F\u51FD\u6570\u5F0F\u8C03\u7528\uFF0C\u53EF\u5728\u4EFB\u4F55\u5730\u65B9\u4F7F\u7528\uFF0C\u4F1A\u81EA\u52A8\u521B\u5EFA DOM \u5BB9\u5668",paraId:15,tocIndex:11},{value:"useAsyncModal()",paraId:15,tocIndex:11},{value:" \u662F Hook\uFF0C\u53EA\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u9700\u8981\u624B\u52A8\u6E32\u67D3 holder",paraId:15,tocIndex:11},{value:"\u73B0\u5728\u4F60\u5DF2\u7ECF\u638C\u63E1\u4E86 awaitable-modal \u7684\u57FA\u672C\u7528\u6CD5\uFF01\u63A5\u4E0B\u6765\u53EF\u4EE5\uFF1A",paraId:16,tocIndex:12},{value:"\u67E5\u770B ",paraId:17,tocIndex:12},{value:"\u5B8C\u6574\u6587\u6863",paraId:18,tocIndex:12},{value:" \u4E86\u89E3\u66F4\u591A API \u7EC6\u8282",paraId:17,tocIndex:12},{value:"\u7ED3\u5408 Ant Design\u3001Material-UI \u7B49 UI \u5E93\u4F7F\u7528",paraId:17,tocIndex:12},{value:"\u6839\u636E\u9879\u76EE\u9700\u6C42\u5B9A\u5236\u4F60\u81EA\u5DF1\u7684 Modal \u7EC4\u4EF6",paraId:17,tocIndex:12},{value:"\u795D\u4F60\u4F7F\u7528\u6109\u5FEB\uFF01 \u{1F389}",paraId:19,tocIndex:12}]},22009:function(o,n,a){a.r(n),a.d(n,{texts:function(){return e}});const e=[{value:"\u4E00\u4E2A\u5C06 React \u6A21\u6001\u6846\u64CD\u4F5C Promise \u5316\u7684\u8F7B\u91CF\u7EA7\u5DE5\u5177\u5E93\uFF0C\u8BA9\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:0,tocIndex:0},{value:"async/await",paraId:0,tocIndex:0},{value:" \u8BED\u6CD5\u4F18\u96C5\u5730\u5904\u7406\u6A21\u6001\u6846\u4EA4\u4E92\u3002",paraId:0,tocIndex:0},{value:"\u5728\u4F20\u7EDF\u7684 Modal \u4F7F\u7528\u65B9\u5F0F\u4E2D\uFF0C\u6211\u4EEC\u9700\u8981\u901A\u8FC7\u56DE\u8C03\u51FD\u6570\u6765\u5904\u7406\u7528\u6237\u7684\u64CD\u4F5C\uFF0C\u8FD9\u5BFC\u81F4\u4EE3\u7801\u903B\u8F91\u5206\u6563\uFF0C\u96BE\u4EE5\u7EF4\u62A4\uFF1A",paraId:1,tocIndex:2},{value:`// \u274C \u4F20\u7EDF\u65B9\u5F0F\uFF1A\u4EE3\u7801\u903B\u8F91\u5206\u6563\uFF0C\u96BE\u4EE5\u9605\u8BFB
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
`,paraId:2,tocIndex:2},{value:"\u4F7F\u7528 awaitable-modal\uFF0C\u4EE3\u7801\u903B\u8F91\u96C6\u4E2D\u5728\u4E00\u5904\uFF0C\u6E05\u6670\u6613\u61C2\uFF1A",paraId:3,tocIndex:3},{value:`import { asyncModal } from 'awaitable-modal'

// \u2705 awaitable-modal \u65B9\u5F0F\uFF1A\u903B\u8F91\u96C6\u4E2D\uFF0C\u4EE3\u7801\u6E05\u6670
function AsyncModalWay () {
  const handleClick = async () => {
    try {
      // \u5F39\u7A97\u903B\u8F91\u3001\u786E\u8BA4\u903B\u8F91\u3001\u540E\u7EED\u5904\u7406\u90FD\u5728\u4E00\u8D77, FormModal \u4E2D\u9700\u8981\u63D0\u4F9B onOk\\onCancel \u56DE\u8C03\u5904\u7406
      const formData = await asyncModal(FormModal, { title: '\u586B\u5199\u8868\u5355' })

      // \u7528\u6237\u70B9\u51FB\u786E\u8BA4\u540E\u624D\u4F1A\u6267\u884C\u5230\u8FD9\u91CC
      await api.submit(formData)
      message.success('\u63D0\u4EA4\u6210\u529F')

      // \u7EE7\u7EED\u540E\u7EED\u64CD\u4F5C

    } catch (error) {
      // \u7528\u6237\u70B9\u51FB\u53D6\u6D88\u6216\u53D1\u751F\u9519\u8BEF\u90FD\u4F1A\u8FDB\u5165\u8FD9\u91CC
      if (error instanceof AsyncModalCancelError) {
        console.log('\u7528\u6237\u53D6\u6D88\u4E86\u64CD\u4F5C')
      } else {
        message.error('\u63D0\u4EA4\u5931\u8D25')
      }
    }
  }

  return <Button onClick={handleClick}>\u6253\u5F00\u5F39\u7A97</Button>\uFF1B
}
`,paraId:4,tocIndex:3},{value:"\u7279\u6027",paraId:5,tocIndex:4},{value:"\u4F20\u7EDF Modal",paraId:5,tocIndex:4},{value:"awaitable-modal",paraId:5,tocIndex:4},{value:"\u4EE3\u7801\u7EC4\u7EC7",paraId:5,tocIndex:4},{value:"\u56DE\u8C03\u51FD\u6570\u5206\u6563\u5728\u591A\u5904",paraId:5,tocIndex:4},{value:"async/await \u96C6\u4E2D\u5904\u7406",paraId:5,tocIndex:4},{value:"\u53EF\u8BFB\u6027",paraId:5,tocIndex:4},{value:"\u9700\u8981\u8DF3\u8F6C\u67E5\u770B\u4E0D\u540C\u56DE\u8C03",paraId:5,tocIndex:4},{value:"\u4ECE\u4E0A\u5230\u4E0B\u7EBF\u6027\u9605\u8BFB",paraId:5,tocIndex:4},{value:"\u6D41\u7A0B\u63A7\u5236",paraId:5,tocIndex:4},{value:"\u9700\u8981\u72B6\u6001\u7BA1\u7406",paraId:5,tocIndex:4},{value:"Promise \u81EA\u7136\u6D41\u8F6C",paraId:5,tocIndex:4},{value:"\u9519\u8BEF\u5904\u7406",paraId:5,tocIndex:4},{value:"\u5206\u6563\u5728\u5404\u4E2A\u56DE\u8C03",paraId:5,tocIndex:4},{value:"try/catch \u7EDF\u4E00\u5904\u7406",paraId:5,tocIndex:4},{value:"\u5F02\u6B65\u64CD\u4F5C",paraId:5,tocIndex:4},{value:"\u56DE\u8C03\u5D4C\u5957",paraId:5,tocIndex:4},{value:"async/await \u6241\u5E73\u5316",paraId:5,tocIndex:4}]}}]);
