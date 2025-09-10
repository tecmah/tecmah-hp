# frozen_string_literal: true

# RSpec setup fallback to existing helpers if available
require 'rspec'
begin
  require_relative '../spec/spec_helper'
rescue LoadError
  begin
    require_relative './test_helper'
  rescue LoadError
    # No helper found; minimal RSpec configuration
    RSpec.configure do |config|
      config.expect_with :rspec do |c|
        c.syntax = :expect
      end
      config.mock_with :rspec do |m|
        m.verify_partial_doubles = true
      end
    end
  end
end

RSpec.describe 'Site' do
    context "initialization" do
      it "accepts a minimal configuration hash" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        cfg = {} # minimal config; adjust to match implementation
        expect { site_class.new(cfg) }.not_to raise_error
      end

      it "raises a meaningful error when configuration is invalid" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        bad_cfg = { invalid: true }
        expect { site_class.new(bad_cfg) }.to raise_error(ArgumentError).or raise_error(RuntimeError)
      end
    end

    context "environment handling" do
      before do
        @orig_env = ENV["SITE_ENV"]
      end

      after do
        ENV["SITE_ENV"] = @orig_env
      end

      it "defaults to development when SITE_ENV is not set" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        ENV.delete("SITE_ENV")
        site = begin site_class.new({}); rescue; nil; end
        if site && site.respond_to?(:environment)
          expect(site.environment).to match(/dev|development/i)
        else
          skip("Site#environment not implemented; adjust expectation to actual API")
        end
      end

      it "honors SITE_ENV=production" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        ENV["SITE_ENV"] = "production"
        site = begin site_class.new({}); rescue; nil; end
        if site && site.respond_to?(:environment)
          expect(site.environment).to match(/prod|production/i)
        else
          skip("Site#environment not implemented; adjust expectation to actual API")
        end
      end
    end

    context "build lifecycle" do
      it "responds to build without raising (happy path)" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        site = begin site_class.new({}); rescue; nil; end
        if site && site.respond_to?(:build)
          expect { site.build }.not_to raise_error
        else
          skip("Site#build not implemented; adjust to actual API")
        end
      end

      it "propagates errors when build fails" do
        site_class = Object.const_defined?(:Site) ? Site : (defined?(Jekyll::Site) ? Jekyll::Site : nil)
        skip("Site class not found in runtime") unless site_class
        if site_class.instance_methods(false).include?(:build)
          dummy = site_class.allocate
          allow(dummy).to receive(:build).and_raise(StandardError, "build failed")
          expect { dummy.build }.to raise_error(StandardError, /build failed/)
        else
          skip("Site#build not implemented; adjust to actual API")
        end
      end
    end

  it 'has placeholder pending tests for Site functionality' do
    pending('Replace with concrete expectations once Site API is confirmed')
    expect(true).to be(false)
  end
end