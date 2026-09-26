export const answerGuides: Record<
  string,
  { definition: string; example: string }
> = {
  "Network Service Discovery (T1046)": {
    definition:
      "Finding services and open ports on systems to learn what is available on a network.",
    example:
      "A host sends connection probes to ports 22, 80, and 443 across a subnet.",
  },
  "Exploitation for Client Execution (T1203)": {
    definition:
      "Using a software vulnerability to run code in a client application or process.",
    example: "A crafted document triggers a flaw in a user's document reader.",
  },
  "Remote Services (T1021)": {
    definition:
      "Accessing another system through a remote service such as RDP, SMB, or SSH.",
    example:
      "An intruder uses stolen credentials to open an RDP session on a server.",
  },
  "Brute Force (T1110)": {
    definition:
      "Repeatedly trying passwords or other credentials to gain account access.",
    example:
      "An actor tests common passwords against multiple employee accounts.",
  },
  "Disable the account, revoke active sessions, and preserve authentication logs":
    {
      definition:
        "Contain a potentially compromised identity while retaining records for investigation.",
      example:
        "Suspend the targeted account, invalidate its tokens, and export sign-in events.",
    },
  "Block the successful ASN and delete the account's sign-in history": {
    definition:
      "Block traffic by its network origin; deleting logs removes useful evidence.",
    example:
      "An ASN block may stop one route, but the actor could retry through another provider.",
  },
  "Wait for a second successful sign-in before taking action": {
    definition:
      "Delay containment until another suspicious authentication event occurs.",
    example:
      "A compromised session remains active while analysts wait for another login.",
  },
  "Reset every user's password without validating scope": {
    definition:
      "Apply a broad credential reset without confirming which identities are affected.",
    example:
      "Changing all employee passwords can disrupt operations while leaving active tokens valid.",
  },
  "Isolate the endpoint and capture volatile evidence": {
    definition:
      "Limit a host's network access and preserve short-lived system state for analysis.",
    example:
      "Quarantine the laptop and capture running processes and network connections before shutdown.",
  },
  "Reimage the endpoint before collecting artifacts": {
    definition:
      "Replace the system image before preserving files and runtime evidence.",
    example:
      "Reinstalling the operating system can erase the process and persistence artifacts investigators need.",
  },
  "Allow the process to finish to observe its final state": {
    definition:
      "Leave suspicious execution running so its later behavior can be observed.",
    example:
      "A command may continue downloading or launching additional payloads while it is monitored.",
  },
  "Disable the entire subnet's network switch": {
    definition:
      "Disconnect every device on a subnet, regardless of whether it is involved.",
    example:
      "A switch shutdown interrupts unrelated services and users alongside the affected host.",
  },
  "Endpoint logon events correlated with SMB process and network telemetry": {
    definition:
      "Join authentication records with the processes and connections that followed them.",
    example:
      "Match a privileged logon on a workstation to the process that opened an SMB session.",
  },
  "A weekly external vulnerability scan report": {
    definition:
      "A periodic inventory of weaknesses visible from outside the organization.",
    example:
      "A report lists exposed services but does not show who signed in to an internal host.",
  },
  "A DNS blocklist without host-level timestamps": {
    definition:
      "A list of denied domains without a time-linked record of which endpoint queried them.",
    example:
      "A blocked domain appears in the list, but analysts cannot tie it to a workstation's SMB activity.",
  },
  "The domain controller's CPU utilization graph": {
    definition:
      "A time series showing processor load on the authentication server.",
    example:
      "A CPU spike shows workload change but does not identify the account or source host.",
  },
};
