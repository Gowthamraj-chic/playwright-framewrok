# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Chapter05\05_ManualBrowser.spec.ts >> Manual browser context
- Location: tests\Chapter05\05_ManualBrowser.spec.ts:3:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Googel"
Received: Promise {}
```

# Page snapshot

```yaml
- generic [ref=e2]:
  - navigation [ref=e3]:
    - link "About" [ref=e4]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=e5]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=e7]:
      - generic [ref=e8]:
        - link "Gmail" [ref=e10]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=e12]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=e15] [cursor=pointer]
      - link "Sign in" [ref=e20]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=e24]
  - search [ref=e32]:
    - generic [ref=e34]:
      - generic [ref=e36]:
        - button "Add files and tools" [ref=e41] [cursor=pointer]
        - combobox "Search" [active] [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e48]:
            - button "Search by voice" [ref=e51] [cursor=pointer]
            - button "Search by image" [ref=e56] [cursor=pointer]
          - link "AI Mode" [ref=e59] [cursor=pointer]
      - generic [ref=e67]:
        - button "Google Search" [ref=e68] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=e69] [cursor=pointer]
  - generic [ref=e72]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=e73]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCCg
    - link "বাংলা" [ref=e74]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCCk
    - link "తెలుగు" [ref=e75]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCCo
    - link "मराठी" [ref=e76]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCCs
    - link "தமிழ்" [ref=e77]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCCw
    - link "ગુજરાતી" [ref=e78]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCC0
    - link "ಕನ್ನಡ" [ref=e79]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCC4
    - link "മലയാളം" [ref=e80]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCC8
    - link "ਪੰਜਾਬੀ" [ref=e81]:
      - /url: https://www.google.com/setprefs?sig=0_A5dd4jXNkSDC8s91_H4YSBI5h0I%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwiPgL_MwLGXAxUrj-EIHUEaKQgQ2ZgBCDA
  - contentinfo [ref=e83]:
    - generic [ref=e84]: India
    - generic [ref=e85]:
      - generic [ref=e86]:
        - link "Advertising" [ref=e87]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=e88]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=e89]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=e90]:
        - link "Privacy" [ref=e91]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=e92]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=e96] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect, webkit} from '@playwright/test'
  2  | 
  3  | test('Manual browser context', async({})=>{
  4  | 
  5  | const browser=await webkit.launch()
  6  | const context=await browser.newContext()
  7  | const page=await context.newPage()
  8  | 
  9  | await test.step('Naviagte to the URL',async()=>{
  10 | 
  11 |     await page.goto("https://www.google.com")
  12 | })
  13 | 
  14 | const title=await page.title()
  15 | console.log(title)
> 16 |   await expect(page.title()).toBe('Googel')
     |                              ^ Error: expect(received).toBe(expected) // Object.is equality
  17 | })
```