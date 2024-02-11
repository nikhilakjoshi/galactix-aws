---
title: Scripts
description: This page describes the scripts used to automate the port forwarding process.
---

Below is a script that can be used to start a port forwarding session using AWS SSM. The script takes two parameters, the tagname of the instance and the profile to use. The script uses the `aws ec2 describe-instances` command to get the instance id and then uses the `aws ssm start-session` command to start the port forwarding session.

```bash
#!/usr/bin/bash
if [[ $1 = null || $1 = '' ]]; then
  echo "Please provide tagname eg: createportforwarding.sh <tagname> <profile>"
  exit 1
fi
if [[ $2 = null || $2 = '' ]]; then
  echo "Please provide profile eg: createportforwarding.sh <tagname> <profile>"
  exit 1
fi
echo "tagname is: $1"
echo "profile is: $2"
INSTANCE_ID=$(aws ec2 describe-instances \
  --filter "Name=tag:Name,Values=$1" --profile "$2" \
  --query "Reservations[].Instances[?State.Name == 'running'].InstanceId[]" \
  --output text)
echo "$INSTANCE_ID"
aws ssm start-session --target "$INSTANCE_ID" \
  --document-name AWS-StartPortForwardingSession \
  --parameters '{"portNumber":["<port-on-server>"],"localPortNumber":["<port-on-local-machine>"]}' \
  --profile "$2"
exit 1
```

You can save the script to a file and make it executable using the following command:

```bash
createportforwarding.sh <tagname> <profile>
```
