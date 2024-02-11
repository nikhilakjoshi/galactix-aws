---
title: Introduction
description: View and copy the scripts required to start a port forwarding session.
---

Port forwarding or SSH Tunelling is a method of forwarding one network port to another network port. This is useful for forwarding ports to a remote server, or for forwarding ports from a remote server to a local machine. This is useful for accessing services on a remote server, or for accessing services on a local machine from a remote server.

## Pre-requisites

Before we start, you need to have the following installed on your local machine:

1. [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html)
2. [AWS Session Manager Plugin](https://docs.aws.amazon.com/systems-manager/latest/userguide/session-manager-working-with-install-plugin.html)

If your aws credentials are of a federated user, you need to login using the following command:

```bash
aws sso login --sso-session <session-name>
```
