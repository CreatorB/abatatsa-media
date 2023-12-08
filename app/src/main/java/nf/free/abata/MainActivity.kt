package nf.free.abata

import android.os.Bundle
import android.view.Window
import android.view.WindowManager
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import androidx.core.content.ContextCompat


class MainActivity : ComponentActivity() {

    lateinit var webView: WebView
    val homeUrl = "file:///android_asset/index.html"

    override fun onCreate(savedInstanceState: Bundle?) {
        val window: Window = getWindow()
        window.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS)
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS)
        window.statusBarColor = ContextCompat.getColor(applicationContext, R.color.primary)

        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        webView = findViewById<WebView>(R.id.webView)
        webView.settings.javaScriptEnabled = true
        webView.getSettings().domStorageEnabled = true
        webView.webViewClient = object : WebViewClient() {}
        // Load initial asset URL
        webView.loadUrl(homeUrl)
    }

    // Handle Android back button press
    override fun onBackPressed() {
        if (webView.canGoBack()) {
            webView.goBack() // Go back in WebView's history
        } else {
            super.onBackPressed()
        }
    }

}