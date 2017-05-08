<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(



	'siteUrl' => array(
		'ru' => 'http://bti2.dev/',
		'en_us' => 'http://bti2.dev/en/',
	),

	'siteName' => array(
		'ru' => 'Бейкер Тилли Россия',
		'en_us' => 'Baker Tilly Russia',
	),

	// Environment-specific variables (see https://craftcms.com/docs/multi-environment-configs#environment-specific-variables)
	'environmentVariables' => array(
		'basePath' => '/users/jd/vh/bti.dev/craft2/public/',
		'baseUrl' => 'http://bti2.dev/',
	),


	// Default Week Start Day (0 = Sunday, 1 = Monday...)
	'defaultWeekStartDay' => 0,

	// Enable CSRF Protection (recommended, will be enabled by default in Craft 3)
	'enableCsrfProtection' => true,

	// Whether "index.php" should be visible in URLs (true, false, "auto")
	'omitScriptNameInUrls' => true,

	// Control Panel trigger word
	'cpTrigger' => 'admin',

	// Dev Mode (see https://craftcms.com/support/dev-mode)
	'devMode' => false,

//	'limitAutoSlugsToAscii' => true,
//    'customAsciiCharMappings' => array(
//		// Russian
//		'X'=>'%%%', ord('а') => 'B', 'В' => 'V', 'Г' => 'G', 'Д' => 'D', 'Е' => 'E', 'Ё' => 'Yo', 'Ж' => 'Zh',
//		'З' => 'Z', 'И' => 'I', 'Й' => 'J', 'К' => 'K', 'Л' => 'L', 'М' => 'M', 'Н' => 'N', 'О' => 'O',
//		'П' => 'P', 'Р' => 'R', 'С' => 'S', 'Т' => 'T', 'У' => 'U', 'Ф' => 'F', 'Х' => 'H', 'Ц' => 'C',
//		'Ч' => 'Ch', 'Ш' => 'Sh', 'Щ' => 'Sh', 'Ъ' => '', 'Ы' => 'Y', 'Ь' => '', 'Э' => 'E', 'Ю' => 'Yu',
//		'Я' => 'Ya',
//		'б' => 'b', 'в' => 'v', 'г' => 'g', 'д' => 'd', 'е' => 'e', 'ё' => 'yo', 'ж' => 'zh',
//		'з' => 'z', 'и' => 'i', 'й' => 'j', 'к' => 'k', 'л' => 'l', 'м' => 'm', 'н' => 'n', 'о' => 'o',
//		'п' => 'p', 'р' => 'r', 'с' => 's', 'т' => 't', 'у' => 'u', 'ф' => 'f', 'х' => 'h', 'ц' => 'c',
//		'ч' => 'ch', 'ш' => 'sh', 'щ' => 'sh', 'ъ' => '', 'ы' => 'y', 'ь' => '', 'э' => 'e', 'ю' => 'yu',
//		'я' => 'ya',
//    ),
//



);
