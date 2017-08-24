<header id="navbar" role="banner" class="fs-height scroll-btn text-center vertical-center">
  <div class="container">
	<div class="navbar-header">
      <?php if ($logo): ?>
        <a class="logo navbar-btn" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>">
          <img src="<?php print $logo; ?>" alt="<?php print t('Home'); ?>" class="img-responsive" />
        </a>
      <?php endif; ?>

      <?php if (!empty($site_name)): ?>
        <a class="name navbar-brand" href="<?php print $front_page; ?>" title="<?php print t('Home'); ?>"><?php print $site_name; ?></a>
      <?php endif; ?>

      <?php if (!empty($site_slogan)): ?>
        <p class="site-slogan"><?php print $site_slogan; ?></p>
      <?php endif; ?>
	</div>
  </div>
</header>

<?php if (!empty($page['content_bottom'])): ?>
  <div class="content-bottom">
    <?php print render($page['content_bottom']); ?>
  </div><!-- /.content-bottom -->
<?php endif; ?>

<?php if (!empty($page['footer'])): ?>
  <footer class="footer <?php print $container_class; ?>">
    <?php print render($page['footer']); ?>
  </footer>
<?php endif; ?>