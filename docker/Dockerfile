# Pake base image resmi FrankenPHP dengan PHP 8.3
FROM dunglas/frankenphp:php8.4

# Install ekstensi PHP yang sering dibutuhin Laravel (termasuk pcntl untuk Octane)
RUN install-php-extensions \
    pdo_mysql \
    gd \
    intl \
    zip \
    pcntl \
    redis \
    opcache

# Pindahin Composer dari official image-nya ke container kita
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Set folder kerja di dalam container
WORKDIR /app

# (Opsional) Kalau butuh Node.js buat compile asset Vite/Tailwind
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - && \
    apt-get install -y nodejs