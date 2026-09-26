export type ExamQuestion = {
  number: number;
  category: string;
  tag: string;
  prompt: string;
  answers: [string, string][];
  correct: string;
  rationale: string;
};

const questionPool: Omit<ExamQuestion, "number">[] = [
  {
    category: "Threat hunting",
    tag: "NETWORK RECONNAISSANCE",
    prompt:
      "During a 15-minute collection window, a NIDS observes 1,400 TCP SYN packets from 10.24.8.19 to 172.16.40.12. Destination ports increment across 20-1024; no completed handshakes are recorded. Which MITRE ATT&CK behavior best fits this telemetry?",
    answers: [
      ["A", "Network Service Discovery (T1046)"],
      ["B", "Exploitation for Client Execution (T1203)"],
      ["C", "Remote Services (T1021)"],
      ["D", "Brute Force (T1110)"],
    ],
    correct: "A",
    rationale:
      "A sequential sweep of destination ports with incomplete TCP handshakes is consistent with active service discovery. ATT&CK technique T1046 covers network service scanning; the telemetry indicates reconnaissance, not successful access or credential guessing.",
  },
  {
    category: "SIEM operations",
    tag: "IDENTITY ANALYTICS",
    prompt:
      "A SIEM correlates 42 failed logins against one account from 18 source addresses, followed by a successful sign-in from a new ASN. Which response best preserves evidence while limiting risk?",
    answers: [
      [
        "A",
        "Disable the account, revoke active sessions, and preserve authentication logs",
      ],
      [
        "B",
        "Block the successful ASN and delete the account's sign-in history",
      ],
      ["C", "Wait for a second successful sign-in before taking action"],
      ["D", "Reset every user's password without validating scope"],
    ],
    correct: "A",
    rationale:
      "The sequence suggests password spraying followed by a possible account compromise. Contain the affected identity and revoke sessions while preserving the log evidence needed to scope the incident.",
  },
  {
    category: "Incident response",
    tag: "ENDPOINT TRIAGE",
    prompt:
      "An endpoint alert shows PowerShell launched by an Office process, followed by an encoded command and an outbound connection to a newly registered domain. What is the strongest immediate investigative action?",
    answers: [
      ["A", "Isolate the endpoint and capture volatile evidence"],
      ["B", "Reimage the endpoint before collecting artifacts"],
      ["C", "Allow the process to finish to observe its final state"],
      ["D", "Disable the entire subnet's network switch"],
    ],
    correct: "A",
    rationale:
      "The process chain and suspicious egress warrant containment. Isolating the host limits further activity while volatile capture preserves process and network evidence for triage.",
  },
  {
    category: "Threat hunting",
    tag: "LATERAL MOVEMENT",
    prompt:
      "Several workstations initiate SMB sessions to a domain controller shortly after a privileged account logs on interactively to each host. Which data source is most useful to confirm possible lateral movement?",
    answers: [
      [
        "A",
        "Endpoint logon events correlated with SMB process and network telemetry",
      ],
      ["B", "A weekly external vulnerability scan report"],
      ["C", "A DNS blocklist without host-level timestamps"],
      ["D", "The domain controller's CPU utilization graph"],
    ],
    correct: "A",
    rationale:
      "Correlating authentication events with process and network telemetry establishes who logged in, where, and what initiated SMB. This supports a timeline for validating lateral movement.",
  },
];

export const examCategories = [
  "All domains",
  "SIEM operations",
  "Threat hunting",
  "Incident response",
];

export const examQuestions: ExamQuestion[] = Array.from(
  { length: 30 },
  (_, index) => ({
    number: index + 1,
    ...questionPool[(index - 2 + questionPool.length) % questionPool.length],
  }),
);
