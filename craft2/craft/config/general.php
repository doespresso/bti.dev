<?php


return array(
    '*'  => array(
        'defaultWeekStartDay' => 0,
        'enableCsrfProtection' => true,
        'omitScriptNameInUrls' => true,
        'cpTrigger' => 'admin',
    ),
    '.dev' => array(
        //	'cacheMethod' => "db",

        'siteUrl' => array(
            'ru' => 'http://bti2.dev/',
            'en_us' => 'http://bti2.dev/en/',
        ),
        'siteName' => array(
            'ru' => 'Бейкер Тилли Россия',
            'en_us' => 'Baker Tilly Russia',
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
    '.ip'  => array(
        //	'cacheMethod' => "db",

        'siteUrl' => array(
            'ru' => 'http://bti2.dev/',
            'en_us' => 'http://bti2.dev/en/',
        ),
        'siteName' => array(
            'ru' => 'Бейкер Тилли Россия',
            'en_us' => 'Baker Tilly Russia',
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
    )
);