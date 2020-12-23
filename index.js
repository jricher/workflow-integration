
const { Toolkit } = require("actions-toolkit");
const router = require("@mheap/action-router");

Toolkit.run(async (tools) => {
  await router(
    {
      "issues.opened": onIssueOpened
    },
    [tools]
  );

  tools.exit.success("Issue managed!");
});

async function onIssueOpened(tools) {
  tools.log.pending("Issue opened: ", tools);
}
