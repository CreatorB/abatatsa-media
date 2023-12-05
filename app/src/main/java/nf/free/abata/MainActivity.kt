package nf.free.abata

import android.content.Intent
import android.net.Uri
import android.os.Build
import android.os.Bundle
import android.util.Log
import android.view.KeyEvent
import android.webkit.WebChromeClient
import android.webkit.WebResourceRequest
import android.webkit.WebView
import android.webkit.WebViewClient
import androidx.activity.ComponentActivity
import java.util.Stack


class MainActivity : ComponentActivity() {

    lateinit var webView: WebView
    val homeUrl = "file:///android_asset/index.html"

    override fun onCreate(savedInstanceState: Bundle?) {
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