function init_whatsapp (hash)
{
	if (!hash)
	{
		return;
	}

	insertJs_whatsapp(hash);
}

function insertJs_whatsapp (hash)
{
	var script = document.createElement("script");
	script.type = "text/javascript";
	script.src = `https://smartarget.online/loader.js?ver=${Math.random()}&u=${hash}&source=woocommerce_all`;
	document.head.appendChild(script);
}

init_whatsapp(smartarget_whatsapp_params.hash);
