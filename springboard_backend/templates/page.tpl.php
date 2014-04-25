<div id="header-wrapper">

<header class="clearfix container" id="header-inner">
  <div id="top-wrapper">
    <?php if ($logo) : ?>
      <div id="logo-wrapper" class="inline-block">
        <a href="/springboard">
          <img src="<?php print check_url($logo); ?>" alt="<?php print $site_name; ?>" id="logo" title="<?php print $site_name; ?>"/>
        </a>
      </div>
    <?php endif; ?>

    <div id="menu-wrapper" class="inline-block">
      <?php print render($main_menu); ?>
    </div><!--// menu-wrapper-->

</div><!--// top-wrapper-->

  <?php print render($page['header']); ?>

</header>

</div><!--// header-wrapper-->

<div id="page-title-wrapper">
  <div class="page-title-inner clearfix container">
    <div class="row-fluid">
      <div class="span4">
        <?php print render($title_prefix); ?>
        <?php if ($title): ?>
          <h1 class="page-title"><?php print $title; ?></h1>
        <?php endif; ?>
        <?php print render($title_suffix); ?>
      </div>
      <div id="user-welcome" class="span8">
        <?php if (isset($sb_dashboard)): ?>
          <h2><?php print t('Welcome back'); ?> <?php print $the_user; ?></h2>
        <?php endif; ?>
      </div>
    </div>
  </div>
</div>

<div id="main" class="container clearfix">

  <?php if ($messages): ?>
    <?php print $messages; ?>
  <?php endif; ?>
  <?php print render($tabs); ?> 
  <div class="element-invisible"><a id="main-content"></a></div>
  <?php if ($action_links): ?>
    <ul class="action-links"><?php print render($action_links); ?></ul>
  <?php endif; ?>

  <?php print render($page['content']); ?>
</div><!-- /main -->

<div id="footer-wrapper">
<footer id="footer" class="clearfix region container">
  <?php print render($page['footer']); ?>
  <?php print $footer_menu; ?>

  <div id="copyright">
    <p>
      <?php print t('Copyright'); ?>
      <?php print date('Y'); ?>
      <?php print t('Jackson River'); ?>
      <span class="copyright-pipe"> | </span>
      <?php print t('All Rights Reserved'); ?>
    </p>
  </div>

</footer>
</div>
