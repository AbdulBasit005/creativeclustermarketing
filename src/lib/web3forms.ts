const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ??
  "f47b37e3-90b2-401c-a703-64748fb55907";

type Web3FormsResponse = {
  success: boolean;
  message?: string;
};

export async function submitWeb3Form(fields: Record<string, string>) {
  const formData = new FormData();
  formData.append("access_key", WEB3FORMS_ACCESS_KEY);

  for (const [key, value] of Object.entries(fields)) {
    if (value) formData.append(key, value);
  }

  const response = await fetch(WEB3FORMS_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  return (await response.json()) as Web3FormsResponse;
}
