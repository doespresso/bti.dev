<?php


return array(
    '*'  => array(
        'defaultWeekStartDay' => 0,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
        'siteName' => array(
            'ru' => 'Бейкер Тилли Россия',
            'en_us' => 'Baker Tilly Russia',
        ),
    ),
    '.dev' => array(
        //	'cacheMethod' => "db",

        'siteUrl' => array(
            'ru' => 'http://bti2.dev/',
            'en_us' => 'http://bti2.dev/en/',
        ),
        'environmentVariables' => array(
            'basePath' => '/users/jd/vh/bti.dev/craft2/public/',
            'baseUrl' => 'http://bti2.dev/',
        ),
        'devMode' => true,
        //	'limitAutoSlugsToAscii' => true,
        //    'customAsciiCharMappings' => array(
        //		208=>'A'
        //	),
    ),
    '128.199.51.224'  => array(
        //	'cacheMethod' => "db",

        'siteUrl' => array(
            'ru' => 'http://128.199.51.224/',
            'en_us' => 'http://128.199.51.224/en/',
        ),
        'environmentVariables' => array(
            'basePath' => '/var/www/html/bti.dev/craft2/public/',
            'baseUrl' => 'http://128.199.51.224/',
        ),
        'devMode' => true,
        //	'limitAutoSlugsToAscii' => true,
        //    'customAsciiCharMappings' => array(
        //		208=>'A'
        //	),
    )
);