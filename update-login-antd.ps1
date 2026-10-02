$loginRoot = 'C:\Users\sanika\Documents\Simplified Managment'
$loginMain = Join-Path $loginRoot 'src\main.jsx'
$loginCssPath = Join-Path $loginRoot 'src\styles.css'
$loginCode = Get-Content -LiteralPath $loginMain -Raw
$loginCode = $loginCode.Replace('import "./styles.css";', 'import { Button, Checkbox, ConfigProvider, Form, Input } from "antd";' + "`n" + 'import "antd/dist/reset.css";' + "`n" + 'import "./styles.css";')
$loginCode = $loginCode.Replace('  const [visible, setVisible] = useState(false);', '')
$loginCode = $loginCode.Replace('  function submit(event) {', '  function submit() {').Replace('    event.preventDefault();', '')
$loginForm = @'
          <Form layout="vertical" onFinish={submit} onValuesChange={() => setMessage("")} requiredMark={false}>
            <Form.Item label="Email address" name="email" rules={[{ required: true, message: "Enter your email address." }, { type: "email", message: "Enter a valid email address." }]}>
              <Input type="email" autoComplete="username" placeholder="you@company.com" />
            </Form.Item>
            {!recovery && <>
              <Form.Item label={<div className="password-label"><span>Password</span><Button type="link" className="forgot-button" onClick={switchMode}>Forgot password?</Button></div>} name="password" rules={[{ required: true, message: "Enter your password." }]}>
                <Input.Password autoComplete="current-password" placeholder="Enter your password" />
              </Form.Item>
              <Form.Item name="remember" valuePropName="checked" className="remember-item"><Checkbox>Keep me signed in</Checkbox></Form.Item>
            </>}
            <Button type="primary" htmlType="submit" block>{recovery ? "Send reset link" : "Sign in to your workspace"}<span aria-hidden="true">→</span></Button>
            {message && <p className="notice" role="status">{message}</p>}
            {recovery && <Button type="link" className="back" onClick={switchMode}>← Back to sign in</Button>}
          </Form>
'@
$loginCode = [regex]::Replace($loginCode, '(?s)          <form onSubmit=\{submit\}>.*?</form>', $loginForm)
$loginCode = $loginCode.Replace('<React.StrictMode><LoginPage /></React.StrictMode>', '<React.StrictMode><ConfigProvider theme={{ token: { colorPrimary: "#376fb3", colorText: "#29312f", colorTextPlaceholder: "#a0a39c", colorBorder: "#dedfd9", colorBgContainer: "#fffefa", borderRadius: 11, controlHeight: 49, fontFamily: "Inter, system-ui, sans-serif", fontSize: 13 }, components: { Button: { primaryShadow: "none" } } }}><LoginPage /></ConfigProvider></React.StrictMode>')
Set-Content -LiteralPath $loginMain -Value $loginCode -Encoding utf8
$loginCss = Get-Content -LiteralPath $loginCssPath -Raw
$loginCss = [regex]::Replace($loginCss, '(?m)^svg \{.*\}\r?\n', '.property-art { display: block; }' + "`n")
$loginCss = [regex]::Replace($loginCss, '(?m)^(form|label|input[^ ]*|input\[.*?\]|input::placeholder|input:focus|\.label-row|\.text-button|\.text-button:hover, a:hover|\.password-field[^ ]*|\.password-field input|\.visibility[^ ]*|\.remember[^ ]*|\.remember input|\.submit[^ ]*|\.submit span|form > input \+ \.submit) \{[^\r\n]*\}\r?\n', '')
$loginCss += @'

/* Ant Design owns the form controls; these rules handle layout and icon accents. */
.login .ant-form-item { margin-bottom: 22px; }
.login .ant-form-item-label > label { font-size: 12px; font-weight: 500; width: 100%; }
.login .ant-form-item-label { width: 100%; }
.password-label { width: 100%; display: flex; justify-content: space-between; align-items: center; }
.login .forgot-button { height: auto; padding: 0; font-size: 11px; }
.login .remember-item { margin-top: -4px; margin-bottom: 24px; }
.login .ant-checkbox-wrapper { font-size: 12px; color: #737974; }
.login .ant-btn-primary { font-weight: 500; gap: 14px; }
.login .ant-input-password-icon { background: transparent; color: #92998f; }
.login .ant-input-password-icon:hover { background: transparent; color: #376fb3; }
.login .ant-input-password input { min-height: 0; }
a:hover { text-decoration: underline; }
'@
Set-Content -LiteralPath $loginCssPath -Value $loginCss -Encoding utf8
