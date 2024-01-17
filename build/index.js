var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent") || "") ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 51,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.tsx",
          lineNumber: 101,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  meta: () => meta
});
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var meta = () => [{ title: "Jadon Scholes" }];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { lang: "en", children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2("meta", { charSet: "utf-8" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 20,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 22,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 18,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 26,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// app/routes/contact.tsx
var contact_exports = {};

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => Index,
  links: () => links
});

// app/components/terminal.tsx
import { format } from "date-fns";
import { useState as useState2 } from "react";

// app/components/command.tsx
import { useState } from "react";

// app/components/commandOutput.tsx
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Form } from "@remix-run/react";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var Welcome = () => /* @__PURE__ */ jsxDEV3("p", { children: [
  "Welcome! \u{1F389} Thanks for visiting!",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 15,
    columnNumber: 7
  }, this),
  "This website is an interactive terminal.",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 17,
    columnNumber: 7
  }, this),
  "Try typing in ",
  /* @__PURE__ */ jsxDEV3("b", { children: "help" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 18,
    columnNumber: 21
  }, this),
  " to see a list of available commands."
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 13,
  columnNumber: 5
}, this), About = () => /* @__PURE__ */ jsxDEV3("p", { children: [
  "Hey there! \u{1F44B}",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this),
  "My name is Jadon. I'm a Software Developer based in Utah.",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 29,
    columnNumber: 7
  }, this),
  "I enjoy all kinds of development, but I'm most interested in web and mobile development.",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, this),
  "I aspire to learn as much as I can so that I can contribute to pushing the boudaries of what's possible with development.",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this),
  "In my free time I enjoy playing pickleball and soccer, watching the NBA, spending time with friends and family, the occasional video game, and learning new things.",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 39,
    columnNumber: 7
  }, this),
  "I'm always interested in new connections and opportunities, so don't hesitate to reach out!"
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 25,
  columnNumber: 5
}, this), Social = () => /* @__PURE__ */ jsxDEV3("p", { children: [
  /* @__PURE__ */ jsxDEV3("a", { href: "https://github.com/jschol3s", className: "social-link", children: [
    /* @__PURE__ */ jsxDEV3(FontAwesomeIcon, { icon: faGithub }, void 0, !1, {
      fileName: "app/components/commandOutput.tsx",
      lineNumber: 50,
      columnNumber: 9
    }, this),
    "Github"
  ] }, void 0, !0, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 53,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3(
    "a",
    {
      href: "https://www.linkedin.com/in/jadon-scholes-a97110172",
      className: "social-link",
      children: [
        /* @__PURE__ */ jsxDEV3(FontAwesomeIcon, { icon: faLinkedin }, void 0, !1, {
          fileName: "app/components/commandOutput.tsx",
          lineNumber: 58,
          columnNumber: 9
        }, this),
        "Linkedin"
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/commandOutput.tsx",
      lineNumber: 54,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 61,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("a", { href: "https://twitter.com/jadonscholes", className: "social-link", children: [
    /* @__PURE__ */ jsxDEV3(FontAwesomeIcon, { icon: faTwitter }, void 0, !1, {
      fileName: "app/components/commandOutput.tsx",
      lineNumber: 63,
      columnNumber: 9
    }, this),
    "Twitter"
  ] }, void 0, !0, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 62,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 48,
  columnNumber: 5
}, this);
var Source = () => /* @__PURE__ */ jsxDEV3("p", { children: [
  "View the ",
  /* @__PURE__ */ jsxDEV3("a", { href: "https://github.com/jschol3s/portfolio", children: "source code" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 92,
    columnNumber: 16
  }, this),
  " ",
  "on Github"
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 91,
  columnNumber: 5
}, this), Help = () => /* @__PURE__ */ jsxDEV3("p", { children: [
  "Available commands:",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 102,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "about" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 103,
    columnNumber: 7
  }, this),
  " - About me",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 104,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "social" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 105,
    columnNumber: 7
  }, this),
  " - Social links",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 106,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "source" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 109,
    columnNumber: 7
  }, this),
  " - View the source code",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 110,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "clear" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 111,
    columnNumber: 7
  }, this),
  " - clear the terminal",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 112,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "welcome" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 113,
    columnNumber: 7
  }, this),
  " - view the welcome message",
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 114,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ jsxDEV3("b", { children: "help" }, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 115,
    columnNumber: 7
  }, this),
  " - view the help message (this message)"
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 100,
  columnNumber: 5
}, this), Default = (props) => /* @__PURE__ */ jsxDEV3("p", { children: [
  "Command not found: ",
  props.input,
  /* @__PURE__ */ jsxDEV3("br", {}, void 0, !1, {
    fileName: "app/components/commandOutput.tsx",
    lineNumber: 124,
    columnNumber: 7
  }, this),
  "Please type help for allowed commands"
] }, void 0, !0, {
  fileName: "app/components/commandOutput.tsx",
  lineNumber: 122,
  columnNumber: 5
}, this);

// app/components/handleCommands.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function handleCommands(input, props, setOutput) {
  switch (input) {
    case "":
      props.addNewPrompt();
      break;
    case "clear":
      props.clearTerminal();
      break;
    case "welcome":
      setOutput(/* @__PURE__ */ jsxDEV4(Welcome, {}, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 28,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
    case "about":
      setOutput(/* @__PURE__ */ jsxDEV4(About, {}, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 32,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
    case "social":
      setOutput(/* @__PURE__ */ jsxDEV4(Social, {}, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 36,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
    case "source":
      setOutput(/* @__PURE__ */ jsxDEV4(Source, {}, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 45,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
    case "help":
      setOutput(/* @__PURE__ */ jsxDEV4(Help, {}, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 49,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
    default:
      setOutput(/* @__PURE__ */ jsxDEV4(Default, { input }, void 0, !1, {
        fileName: "app/components/handleCommands.tsx",
        lineNumber: 53,
        columnNumber: 17
      }, this)), props.addNewPrompt();
      break;
  }
}

// app/styles/command.css
var command_default = "/build/_assets/command-QXDNIRYA.css";

// app/components/command.tsx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
var Command = (props) => {
  let [submitted, setSubmitted] = useState(!1), [input, setInput] = useState(""), [output, setOutput] = useState(/* @__PURE__ */ jsxDEV5(Fragment, {}, void 0, !1, {
    fileName: "app/components/command.tsx",
    lineNumber: 16,
    columnNumber: 53
  }, this)), handleSubmit = (e) => {
    e.preventDefault(), setSubmitted(!0), handleCommands(input, props, setOutput);
  };
  return /* @__PURE__ */ jsxDEV5("div", { className: "command", children: /* @__PURE__ */ jsxDEV5("div", { className: "prompt-title", children: [
    /* @__PURE__ */ jsxDEV5("form", { onSubmit: (e) => handleSubmit(e), autoComplete: "off", children: [
      /* @__PURE__ */ jsxDEV5("label", { children: "vistor@jadonscholes ~ % " }, void 0, !1, {
        fileName: "app/components/command.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ jsxDEV5(
        "input",
        {
          type: "text",
          onChange: (e) => setInput(e.target.value),
          className: "terminal-input",
          disabled: submitted,
          autoFocus: !0
        },
        void 0,
        !1,
        {
          fileName: "app/components/command.tsx",
          lineNumber: 31,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/command.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ jsxDEV5("div", { className: "terminal-output", children: output }, void 0, !1, {
      fileName: "app/components/command.tsx",
      lineNumber: 39,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/command.tsx",
    lineNumber: 28,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/command.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, this);
}, command_default2 = Command;

// app/styles/terminal.css
var terminal_default = "/build/_assets/terminal-UN24DWF3.css";

// app/components/terminal.tsx
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
var genId = () => Date.now(), terminal = () => {
  let [commands, setCommands] = useState2([{ id: genId() }]), addNewPrompt = () => {
    setCommands([...commands, { id: genId() }]);
  }, clearTerminal = () => {
    setCommands([{ id: genId() }]);
  }, date = format(/* @__PURE__ */ new Date(), "E MMM  d K:mm:ss");
  return /* @__PURE__ */ jsxDEV6("div", { className: "terminal", children: [
    /* @__PURE__ */ jsxDEV6("div", { className: "terminal-header", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "circles", children: [
        /* @__PURE__ */ jsxDEV6("div", { className: "circle circle-red" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 32,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "circle circle-yellow" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 33,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ jsxDEV6("div", { className: "circle circle-green" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 31,
        columnNumber: 9
      }, this),
      "github.com/jschol3s"
    ] }, void 0, !0, {
      fileName: "app/components/terminal.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV6("div", { className: "terminal-body", children: [
      /* @__PURE__ */ jsxDEV6("div", { className: "login", children: [
        "Last login: ",
        date
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 39,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV6("div", { className: "welcome", children: [
        "Type ",
        /* @__PURE__ */ jsxDEV6("b", { children: "welcome" }, void 0, !1, {
          fileName: "app/components/terminal.tsx",
          lineNumber: 41,
          columnNumber: 16
        }, this),
        " and press enter to get started"
      ] }, void 0, !0, {
        fileName: "app/components/terminal.tsx",
        lineNumber: 40,
        columnNumber: 9
      }, this),
      commands?.map(
        (CommandState) => /* @__PURE__ */ jsxDEV6(
          command_default2,
          {
            addNewPrompt,
            clearTerminal
          },
          CommandState.id,
          !1,
          {
            fileName: "app/components/terminal.tsx",
            lineNumber: 44,
            columnNumber: 9
          },
          this
        )
      )
    ] }, void 0, !0, {
      fileName: "app/components/terminal.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/terminal.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}, terminal_default2 = terminal;

// app/styles/global.css
var global_default = "/build/_assets/global-SU42BMSB.css";

// app/routes/_index.tsx
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: global_default },
  { rel: "stylesheet", href: terminal_default },
  { rel: "stylesheet", href: command_default }
];
function Index() {
  return /* @__PURE__ */ jsxDEV7("div", { children: /* @__PURE__ */ jsxDEV7(terminal_default2, {}, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 18,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 17,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-WTR3XZX6.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-JWDJ5HLB.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-ZHRNAVU5.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-GXW2QFHJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-377VEJJ7.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-WTQNCF3S.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0cca609b", hmr: { runtime: "/build/_shared/chunk-ZHRNAVU5.js", timestamp: 1705530809589 }, url: "/build/manifest-0CCA609B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
